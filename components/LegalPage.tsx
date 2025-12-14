import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Page } from '../App';

interface LegalPageProps {
  type: 'imprint' | 'privacy';
  onNavigate: (page: Page) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const isImprint = type === 'imprint';

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center text-slate-500 hover:text-brand-orange transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Zurück
        </button>

        <h1 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">
          {isImprint ? 'Impressum' : 'Datenschutzerklärung'}
        </h1>

        <div className="prose prose-lg max-w-none text-slate-600">
          {isImprint ? (
            <>
              <p className="lead">Angaben gemäß § 5 TMG</p>
              <h3 className="text-slate-900 font-semibold mt-6 text-xl">Kontakt</h3>
              <p>
                Coremis Schweiz<br />
                Bahnhofstrasse 10<br />
                8001 Zürich<br />
                Schweiz
              </p>
              <p>
                E-Mail: kontakt@coremis.ch<br />
                Telefon: +41 44 000 00 00
              </p>
              <h3 className="text-slate-900 font-semibold mt-6 text-xl">Vertretungsberechtigte</h3>
              <p>Dr. Markus V., Managing Partner</p>
              <h3 className="text-slate-900 font-semibold mt-6 text-xl">Handelsregister</h3>
              <p>Eingetragen im Handelsregister des Kantons Zürich.</p>
              <p>UID: CHE-123.456.789</p>
            </>
          ) : (
            <>
              <h3 className="text-slate-900 font-semibold mt-6 text-xl">1. Datenschutz auf einen Blick</h3>
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <h3 className="text-slate-900 font-semibold mt-6 text-xl">2. Datenerfassung auf unserer Website</h3>
              <p>
                <strong>Cookies:</strong> Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
              </p>
              <p>
                <strong>Kontaktformular:</strong> Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <h3 className="text-slate-900 font-semibold mt-6 text-xl">3. Analyse Tools</h3>
              <p>
                Wir nutzen Google Analytics zur Analyse der Website-Nutzung. Die Daten werden anonymisiert verarbeitet. Sie können der Erfassung widersprechen.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};