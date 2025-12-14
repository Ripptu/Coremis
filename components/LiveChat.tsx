import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { GoogleGenAI } from "@google/genai";

interface Message {
  text: string;
  isBot: boolean;
}

export const LiveChat: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const knowledgeBase = `
    Du bist der AI Assistant von Coremis (CFO as a Service in der Schweiz).
    Kontext: Coremis bietet externe CFOs für KMUs (20-250 MA) an.
    Services: Finanzplanung, Liquiditätssicherung, Reporting/MIS, Budgetierung, Strategie, Governance.
    Zielgruppe: CEOs, Inhaber, Verwaltungsräte.
    USP: Pragmatisch, unabhängig, messbare Wirkung, kein Fachjargon.
    Kosten: Flexibel, ab ca. 2500 CHF/Monat, Stundenbasis oder Pauschale.
    Startzeit: Innerhalb von 5 Werktagen.
    Wichtig: Wir ersetzen den Treuhänder nicht, wir ergänzen ihn (Zukunft vs. Vergangenheit).
    Standort: Zürich, aber tätig in ganzer Deutschschweiz.
    
    Regeln:
    1. Antworte NUR auf Fragen zu Coremis oder Finanzen.
    2. Wenn es um andere Themen geht (Wetter, Politik, Witze), lehne höflich ab.
    3. Fasse dich kurz (Maximal 2-3 Sätze).
    4. Sei professionell, höflich und vertrauenswürdig (Schweizer Business Etikette).
  `;

  useEffect(() => {
    if (messages.length === 0) {
        setMessages([{ text: t('chat.welcome'), isBot: true }]);
    }
  }, [t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    if (questionCount >= 10) {
        const limitMsg = { text: "Sie haben das Limit für Fragen in dieser Sitzung erreicht. Bitte kontaktieren Sie uns direkt für ein Erstgespräch.", isBot: true };
        setMessages((prev) => [...prev, { text: inputValue, isBot: false }, limitMsg]);
        setInputValue("");
        return;
    }

    const userMsg = { text: inputValue, isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    setQuestionCount(prev => prev + 1);

    try {
        let apiKey = '';
        // Safely access process.env to prevent crashing in browser environments
        try {
            // @ts-ignore
            if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
                // @ts-ignore
                apiKey = process.env.API_KEY;
            }
        } catch (e) {
            console.warn("process.env is not available in this environment.");
        }

        if (!apiKey) {
           throw new Error("No API Key found");
        }
        
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userMsg.text,
            config: {
                systemInstruction: knowledgeBase,
                maxOutputTokens: 100,
                temperature: 0.7,
            },
        });
        
        const botText = response.text || "Entschuldigung, ich konnte das nicht verarbeiten. Bitte kontaktieren Sie uns direkt.";
        
        setMessages((prev) => [...prev, { text: botText, isBot: true }]);

    } catch (error) {
        console.error("AI Error or No Key:", error);
        let fallbackText = "Das ist eine interessante Frage. Da es hier auf Details ankommt, empfehlen wir ein kostenloses Erstgespräch.";
        const lowerInput = userMsg.text.toLowerCase();
        if (lowerInput.includes('kosten') || lowerInput.includes('preis')) fallbackText = "Unsere Preise hängen vom Aufwand ab. Wir starten oft mit flexiblen Modellen ab ca. CHF 2'500 pro Monat.";
        if (lowerInput.includes('kontakt')) fallbackText = "Nutzen Sie gerne den Button 'Erstgespräch' oben rechts.";
        
        setMessages((prev) => [...prev, { text: fallbackText, isBot: true }]);
    } finally {
        setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up origin-bottom-right flex flex-col h-[500px]">
          <div className="bg-slate-900 p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center space-x-3">
               <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-sm shadow-inner ring-2 ring-white/10">CS</div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full animate-pulse"></span>
               </div>
               <div>
                   <span className="text-white font-bold text-sm block">Coremis AI</span>
                   <span className="text-slate-400 text-xs flex items-center">
                       <span className="w-1 h-1 bg-green-500 rounded-full mr-1.5"></span>
                       Online • {10 - questionCount} Fragen übrig
                   </span>
               </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors bg-white/10 p-1 rounded-full">
              <X size={18} />
            </button>
          </div>
          
          <div className="flex-grow p-4 bg-slate-50 overflow-y-auto space-y-4">
             {messages.map((msg, idx) => (
                 <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                     {msg.isBot && (
                         <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-brand-orange text-xs font-bold mr-2 mt-1 shrink-0 select-none shadow-sm">AI</div>
                     )}
                     <div 
                        className={`
                            max-w-[85%] p-3.5 text-sm shadow-sm leading-relaxed
                            ${msg.isBot 
                                ? 'bg-white text-slate-700 rounded-2xl rounded-tl-none border border-gray-100' 
                                : 'bg-brand-orange text-white rounded-2xl rounded-tr-none shadow-md'
                            }
                        `}
                     >
                        {msg.text}
                     </div>
                 </div>
             ))}
             
             {isTyping && (
                <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-brand-orange text-xs font-bold mr-2 mt-1 shrink-0 shadow-sm">AI</div>
                    <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex space-x-1 items-center h-10">
                        <span className="w-1.5 h-1.5 bg-brand-orange/60 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                        <span className="w-1.5 h-1.5 bg-brand-orange/60 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                        <span className="w-1.5 h-1.5 bg-brand-orange/60 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                    </div>
                </div>
             )}
             <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center shrink-0">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={questionCount >= 10 ? "Limit erreicht" : t('chat.placeholder')}
              className="flex-grow bg-gray-50 text-sm rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:bg-white transition-all border border-transparent focus:border-brand-orange/20"
              disabled={questionCount >= 10}
            />
            <button 
              type="submit" 
              className={`ml-2 p-3 bg-brand-orange text-white rounded-full shadow-lg shadow-brand-orange/30 transition-all hover:bg-orange-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
              disabled={!inputValue.trim() || questionCount >= 10}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-14 h-14 bg-brand-orange text-white rounded-full shadow-[0_4px_14px_0_rgba(255,85,0,0.39)] hover:scale-105 hover:shadow-[0_6px_20px_rgba(255,85,0,0.23)] transition-all duration-300 z-50 border-2 border-white"
      >
        {isOpen ? <X size={24} /> : (
            <>
                <MessageSquare size={24} className="absolute transition-transform duration-300 scale-100 group-hover:scale-0" />
                <MessageSquare size={24} className="absolute transition-transform duration-300 scale-0 group-hover:scale-100 group-hover:-rotate-12" fill="currentColor" />
            </>
        )}
      </button>
    </div>
  );
};