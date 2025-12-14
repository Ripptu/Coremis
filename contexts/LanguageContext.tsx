import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'DE' | 'EN' | 'FR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  DE: {
    // Nav
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.contact': 'Erstgespräch',
    'nav.contact_cta': 'Erstgespräch anfragen',
    
    // Hero
    'hero.badge': 'Exklusiv für Schweizer KMU',
    'hero.title.1': 'CFO as a Service.',
    'hero.title.2': 'Klarheit in Zahlen.',
    'hero.subtitle': 'Wir übernehmen die CFO Rolle dort, wo Transparenz fehlt. Unabhängig, pragmatisch und mit messbarer Wirkung.',
    'hero.btn.contact': 'Erstgespräch vereinbaren',
    'hero.btn.services': 'Leistungen ansehen',
    'hero.kpi.volume': 'Verwaltetes Volumen',
    'hero.kpi.mandates': 'Aktive Mandate',
    'hero.kpi.time': 'bis zur ersten Analyse',

    // Problem/Solution
    'prob.title': 'Vom Blindflug zur Kontrolle',
    'prob.text1': 'Wenn Zahlen spät kommen, Excel ausufert oder Liquidität nur gefühlt sicher ist, werden Entscheidungen teuer. Ein externer CFO schafft Transparenz, bringt Planung in ein belastbares System und sorgt dafür, dass Management Reports wieder steuerbar werden.',
    'prob.text2': 'Damit führen Sie nicht mehr aus dem Bauch, sondern mit Kontrolle.',

    // Features
    'features.title': 'Finanzführung, die',
    'features.title_accent': 'Entscheidungen beschleunigt.',
    'features.subtitle': 'Kein Fachjargon, keine theoretischen Konzepte. Wir liefern Systeme, die funktionieren.',
    'features.card1.title': 'Radikale Transparenz',
    'features.card1.desc': 'Reporting und MIS, das in Minuten verstanden wird. Wir verwandeln Datenfriedhöfe in klare Cockpits für die Geschäftsleitung.',
    'features.card2.title': 'Integrierte Planung',
    'features.card2.desc': 'Budget, Forecast und Szenarien, die stabil bleiben. Wir verbinden GuV, Bilanz und Cashflow logisch miteinander.',
    'features.card3.title': 'Liquiditätssicherung',
    'features.card3.desc': 'Cashflow-Planung mit klaren Frühwarnsignalen. Damit Sie auch in volatilen Zeiten immer handlungsfähig bleiben.',

    // Services Overview
    'serv.badge': 'Leistungsübersicht',
    'serv.title': 'Modular, aber geführt.',
    'serv.subtitle': 'Sie wählen nicht aus einer Liste, wir definieren gemeinsam den sinnvollsten Startpunkt für Ihre Situation.',
    'serv.btn': 'Alle Leistungen im Detail',
    'serv.1': 'CFO as a Service',
    'serv.2': 'Finanzplanung & Strategie',
    'serv.3': 'Budgetierung & Forecast',
    'serv.4': 'Cashflow & Liquiditätsplanung',
    'serv.5': 'Reporting & MIS',
    'serv.6': 'Governance, Risiko & Compliance',

    // Case Studies
    'case.title': 'Echte Resultate.',
    'case.title_accent': 'Diskret behandelt.',
    'case.subtitle': 'Als Finanzpartner ist Vertraulichkeit unser höchstes Gut. Hier einige anonymisierte Beispiele unserer Arbeit.',
    'case.anon': 'Anonymisiert',
    'case.1.ind': 'Maschinenbau KMU',
    'case.1.res': 'Liquidität um 20% gesteigert',
    'case.1.desc': 'Durch die Einführung eines rollierenden 13-Wochen Forecasts konnten Engpässe 2 Monate im Voraus erkannt und durch Factoring eliminiert werden.',
    'case.2.ind': 'SaaS Scale-up',
    'case.2.res': 'Series A Funding gesichert',
    'case.2.desc': 'Aufbereitung der Financial Due Diligence und Erstellung eines 5-Jahres Business Plans, der den Investoren Sicherheit gab.',
    'case.3.ind': 'Handelsunternehmen',
    'case.3.res': 'Lagerbestand optimiert',
    'case.3.desc': 'Analyse der Kapitalbindung im Lager führte zu einer Freisetzung von CHF 450k Liquidität innerhalb von 6 Monaten.',
    'case.4.ind': 'Dienstleister',
    'case.4.res': 'Profitabilität +15%',
    'case.4.desc': 'Einführung einer Kostenträgerrechnung zeigte unrentable Sparten auf, die restrukturiert wurden.',

    // Testimonials
    'testi.title': 'Stimmen aus der Praxis',
    'testi.1.quote': 'Ganz ehrlich: Vor Coremis hatte ich Angst vor dem Monatsabschluss. Es war immer ein Blindflug. Jetzt bekomme ich am 5. des Monats ein Dashboard und weiß exakt, was ich investieren kann.',
    'testi.1.author': 'Thomas K.',
    'testi.1.role': 'Inhaber, Produktion',
    'testi.2.quote': 'Wir wollten expandieren, aber die Bank hat abgewunken. Coremis hat unsere Zahlen so aufbereitet, dass der Kredit innerhalb von zwei Wochen durch war. Das war Game-Changing.',
    'testi.2.author': 'Sarah L.',
    'testi.2.role': 'CEO, Tech-Startup',
    'testi.3.quote': 'Ich brauchte keinen Vollzeit-CFO, aber jemanden, der dem Buchhalter auf die Finger schaut. Die Zusammenarbeit ist extrem pragmatisch. Keine PowerPoints, nur Lösungen.',
    'testi.3.author': 'Michael R.',
    'testi.3.role': 'VR-Präsident, Handel',

    // Team
    'team.title': 'Köpfe statt Konzepte.',
    'team.subtitle': 'Finanzen sind Vertrauenssache. Wir sind keine anonyme Beratung, sondern Unternehmer, die Verantwortung übernehmen.',
    'team.role.partner': 'Managing Partner',
    'team.role.senior': 'Senior CFO',

    // Glossary
    'gloss.title': 'Finanz-Deutsch.',
    'gloss.subtitle': 'Wir sprechen Klartext. Hier einige Begriffe, die wir oft nutzen.',
    'gloss.ebitda.t': 'EBITDA',
    'gloss.ebitda.d': 'Gewinn vor Zinsen, Steuern und Abschreibungen. Zeigt, wie profitabel Ihr operatives Geschäft wirklich ist, ohne buchhalterische Tricks.',
    'gloss.runway.t': 'Cash Runway',
    'gloss.runway.d': 'Wie viele Monate überlebt die Firma mit dem aktuellen Geld auf dem Konto, wenn keine neuen Einnahmen kommen? Überlebenswichtig für Startups.',
    'gloss.burn.t': 'Burn Rate',
    'gloss.burn.d': 'Wie viel Geld verbrennt die Firma pro Monat? Wichtig, um zu wissen, wann frisches Kapital benötigt wird.',
    'gloss.fcf.t': 'Free Cash Flow',
    'gloss.fcf.d': 'Das Geld, das am Ende wirklich übrig bleibt, um Schulden zu tilgen oder an Sie als Eigentümer auszuschütten.',

    // Target Audience
    'target.title1': 'Für wen es passt',
    'target.desc1a': 'Typisch sind Schweizer KMU, die wachsen, transformieren oder mehr Sicherheit im Finanzsystem benötigen.',
    'target.desc1b': 'Wenn Buchhaltung vorhanden ist, aber finanzielle Führung fehlt, ist CFO as a Service der logische nächste Schritt.',
    'target.title2': 'Nicht passend',
    'target.desc2a': 'Wenn ausschließlich Buchhaltung (Erfassung), reine Software-Einführung oder klassische theoretische Unternehmensberatung gesucht wird.',
    'target.desc2b': 'Wir arbeiten operativ und strategisch, aber wir ersetzen nicht den Treuhänder.',

    // Process
    'process.badge': 'Der Prozess',
    'process.title': 'So läuft die Zusammenarbeit.',
    'process.subtitle': 'Keine langen Onboardings. Wir schaffen schnell Klarheit und gehen dann in die operative Umsetzung.',
    'process.step1.title': 'Erstgespräch',
    'process.step1.desc': 'Klärung von Situation, Zielen und akuten Schmerzpunkten. Wir prüfen, ob die Chemie stimmt und das Mandat passt.',
    'process.step2.title': 'Startpunkt',
    'process.step2.desc': 'Schnelle Schaffung von Transparenz (Financial Health Check). Wir priorisieren das Wesentliche und sichern die Liquidität.',
    'process.step3.title': 'Umsetzung',
    'process.step3.desc': 'Etablierung eines stabilen Finanzsystems. Regelmäßiges Sparring und Führung des Finanzteams als integraler Partner.',
    'process.cta': 'Jetzt Termin anfragen',

    // FAQ
    'faq.title': 'Häufige Fragen',
    'faq.q1': 'Ab welcher Unternehmensgröße ist CFO as a Service sinnvoll?',
    'faq.a1': 'In der Regel ab ca. 20 bis 250 Mitarbeitenden oder einem Umsatz ab 2 Mio. CHF. Davor reicht oft ein guter Treuhänder, danach wird oft ein interner CFO eingestellt.',
    'faq.q2': 'Wo startet man bei unklarer Datenlage?',
    'faq.a2': 'Wir beginnen mit einer Bestandsaufnahme (Financial Health Check). Zuerst sichern wir die Liquiditätsübersicht, dann strukturieren wir die Datenbasis für aussagekräftiges Reporting.',
    'faq.q3': 'Wie schnell entstehen Ergebnisse?',
    'faq.a3': 'Transparenz über die Liquidität schaffen wir oft innerhalb der ersten Woche. Ein voll integriertes Reporting- und Planungssystem benötigt je nach Komplexität 1-3 Monate.',
    'faq.q4': 'Wie flexibel ist die Zusammenarbeit?',
    'faq.a4': 'Sehr flexibel. Wir können für ein spezifisches Projekt, als Interims-Lösung oder als dauerhafter Teilzeit-CFO (z.B. 1-4 Tage im Monat) mandatiert werden.',
    'faq.q5': 'Ersetzen Sie den Treuhänder?',
    'faq.a5': 'Nein. Wir arbeiten eng mit Ihrem Treuhänder und der Revision zusammen. Der Treuhänder kümmert sich um Vergangenheitsdaten und Abschlüsse, wir kümmern uns um die Zukunft, Steuerung und Planung.',

    // Chat
    'chat.welcome': 'Hallo! Haben Sie eine Frage zu unseren CFO Services?',
    'chat.placeholder': 'Schreiben Sie eine Nachricht...',
    'chat.send': 'Senden',
    'chat.reply': 'Danke für Ihre Nachricht. Wir sind gerade in einem Meeting, melden uns aber in Kürze bei Ihnen.',

    // Bottom CTA
    'cta.title': 'Klarheit in den Zahlen beginnt mit einem Gespräch',
    'cta.desc': 'Wenn Sie wissen möchten, wo die größten Hebel liegen und wie schnell Transparenz möglich ist, sprechen wir unverbindlich.',
    'cta.btn': 'Erstgespräch anfragen',

    // Footer
    'footer.slogan': 'Klarheit, Steuerbarkeit und Sicherheit für Schweizer KMU.',
    'footer.menu': 'Menü',
    'footer.legal': 'Rechtliches',
    'footer.legal.imprint': 'Impressum',
    'footer.legal.privacy': 'Datenschutz',
    'footer.copyright': 'Coremis Schweiz.',
    'footer.madein': 'Made in Switzerland',
  },
  EN: {
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Book a Call',
    'nav.contact_cta': 'Request Consultation',

    // Hero
    'hero.badge': 'Exclusive for Swiss SMEs',
    'hero.title.1': 'CFO as a Service.',
    'hero.title.2': 'Clarity in Numbers.',
    'hero.subtitle': 'We take on the CFO role where transparency is missing. Independent, pragmatic, and with measurable impact.',
    'hero.btn.contact': 'Book a Call',
    'hero.btn.services': 'View Services',
    'hero.kpi.volume': 'Managed Volume',
    'hero.kpi.mandates': 'Active Mandates',
    'hero.kpi.time': 'until first analysis',

    'prob.title': 'From Blind Flight to Control',
    'prob.text1': 'When numbers are late, Excel spirals out of control, or liquidity is only intuitively secure, decisions become expensive. An external CFO creates transparency, brings planning into a resilient system, and ensures management reports are actionable again.',
    'prob.text2': 'Lead with control, not just gut feeling.',

    'features.title': 'Financial leadership that',
    'features.title_accent': 'accelerates decisions.',
    'features.subtitle': 'No jargon, no theoretical concepts. We deliver systems that work.',
    'features.card1.title': 'Radical Transparency',
    'features.card1.desc': 'Reporting and MIS understood in minutes. We turn data graveyards into clear cockpits for management.',
    'features.card2.title': 'Integrated Planning',
    'features.card2.desc': 'Budget, forecast, and scenarios that remain stable. We logically connect P&L, balance sheet, and cash flow.',
    'features.card3.title': 'Liquidity Assurance',
    'features.card3.desc': 'Cash flow planning with clear early warning signals. So you remain actionable even in volatile times.',

    'serv.badge': 'Services Overview',
    'serv.title': 'Modular, but guided.',
    'serv.subtitle': 'You don’t choose from a list; we define the most sensible starting point for your situation together.',
    'serv.btn': 'All services in detail',
    'serv.1': 'CFO as a Service',
    'serv.2': 'Financial Planning & Strategy',
    'serv.3': 'Budgeting & Forecasting',
    'serv.4': 'Cashflow & Liquidity Planning',
    'serv.5': 'Reporting & MIS',
    'serv.6': 'Governance, Risk & Compliance',

    'case.title': 'Real Results.',
    'case.title_accent': 'Discreetly handled.',
    'case.subtitle': 'As a financial partner, confidentiality is our highest asset. Here are some anonymized examples of our work.',
    'case.anon': 'Anonymized',
    'case.1.ind': 'Engineering SME',
    'case.1.res': 'Liquidity increased by 20%',
    'case.1.desc': 'By introducing a rolling 13-week forecast, bottlenecks were identified 2 months in advance and eliminated through factoring.',
    'case.2.ind': 'SaaS Scale-up',
    'case.2.res': 'Series A Funding secured',
    'case.2.desc': 'Preparation of Financial Due Diligence and creation of a 5-year business plan that gave investors security.',
    'case.3.ind': 'Trading Company',
    'case.3.res': 'Inventory optimized',
    'case.3.desc': 'Analysis of capital tied up in inventory led to a release of CHF 450k liquidity within 6 months.',
    'case.4.ind': 'Service Provider',
    'case.4.res': 'Profitability +15%',
    'case.4.desc': 'Introduction of cost unit accounting showed unprofitable divisions which were then restructured.',

    'testi.title': 'Voices from the Field',
    'testi.1.quote': 'Honestly: Before Coremis, I was afraid of the monthly closing. It was always flying blind. Now I get a dashboard on the 5th of the month and know exactly what I can invest.',
    'testi.1.author': 'Thomas K.',
    'testi.1.role': 'Owner, Manufacturing',
    'testi.2.quote': 'We wanted to expand, but the bank waved us off. Coremis prepared our figures so the loan was approved within two weeks. That was game-changing.',
    'testi.2.author': 'Sarah L.',
    'testi.2.role': 'CEO, Tech Startup',
    'testi.3.quote': 'I didn\'t need a full-time CFO, but someone to watch over the accountant. The collaboration is extremely pragmatic. No PowerPoints, just solutions.',
    'testi.3.author': 'Michael R.',
    'testi.3.role': 'Board President, Retail',

    'team.title': 'Heads over Concepts.',
    'team.subtitle': 'Finance is a matter of trust. We are not an anonymous consultancy, but entrepreneurs who take responsibility.',
    'team.role.partner': 'Managing Partner',
    'team.role.senior': 'Senior CFO',

    'gloss.title': 'Financial Jargon.',
    'gloss.subtitle': 'We speak plain English. Here are some terms we often use.',
    'gloss.ebitda.t': 'EBITDA',
    'gloss.ebitda.d': 'Earnings Before Interest, Taxes, Depreciation, and Amortization. Shows how profitable your operational business really is, without accounting tricks.',
    'gloss.runway.t': 'Cash Runway',
    'gloss.runway.d': 'How many months the company survives with the current money in the account if no new income comes in. Vital for startups.',
    'gloss.burn.t': 'Burn Rate',
    'gloss.burn.d': 'How much money does the company burn per month? Important to know when fresh capital is needed.',
    'gloss.fcf.t': 'Free Cash Flow',
    'gloss.fcf.d': 'The money that really remains at the end to pay off debts or distribute to you as the owner.',

    'target.title1': 'Who it fits',
    'target.desc1a': 'Typically Swiss SMEs that are growing, transforming, or need more security in their financial system.',
    'target.desc1b': 'If bookkeeping exists but financial leadership is missing, CFO as a Service is the logical next step.',
    'target.title2': 'Not suitable',
    'target.desc2a': 'If only bookkeeping (data entry), pure software implementation, or classic theoretical management consulting is sought.',
    'target.desc2b': 'We work operationally and strategically, but we do not replace the fiduciary.',

    'process.badge': 'The Process',
    'process.title': 'How we work together.',
    'process.subtitle': 'No long onboardings. We create clarity quickly and then move into operational implementation.',
    'process.step1.title': 'Initial Call',
    'process.step1.desc': 'Clarification of situation, goals, and acute pain points. We check if the chemistry is right and the mandate fits.',
    'process.step2.title': 'Starting Point',
    'process.step2.desc': 'Rapid creation of transparency (Financial Health Check). We prioritize the essentials and secure liquidity.',
    'process.step3.title': 'Implementation',
    'process.step3.desc': 'Establishment of a stable financial system. Regular sparring and leadership of the finance team as an integral partner.',
    'process.cta': 'Request appointment now',

    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'From what company size does CFO as a Service make sense?',
    'faq.a1': 'Usually from about 20 to 250 employees or a turnover from 2 million CHF. Before that, a good fiduciary is often enough; afterwards, an internal CFO is often hired.',
    'faq.q2': 'Where do you start with unclear data?',
    'faq.a2': 'We start with an inventory (Financial Health Check). First, we secure the liquidity overview, then we structure the data basis for meaningful reporting.',
    'faq.q3': 'How quickly do results appear?',
    'faq.a3': 'We often create transparency about liquidity within the first week. A fully integrated reporting and planning system takes 1-3 months depending on complexity.',
    'faq.q4': 'How flexible is the collaboration?',
    'faq.a4': 'Very flexible. We can be mandated for a specific project, as an interim solution, or as a permanent part-time CFO (e.g., 1-4 days a month).',
    'faq.q5': 'Do you replace the fiduciary?',
    'faq.a5': 'No. We work closely with your fiduciary and the audit. The fiduciary takes care of past data and financial statements; we take care of the future, control, and planning.',

    'chat.welcome': 'Hello! Do you have a question about our CFO Services?',
    'chat.placeholder': 'Write a message...',
    'chat.send': 'Send',
    'chat.reply': 'Thanks for your message. We are currently in a meeting but will get back to you shortly.',

    'cta.title': 'Clarity in numbers starts with a conversation',
    'cta.desc': 'If you want to know where the biggest levers are and how quickly transparency is possible, let\'s talk without obligation.',
    'cta.btn': 'Request Consultation',

    'footer.slogan': 'Clarity, control, and security for Swiss SMEs.',
    'footer.menu': 'Menu',
    'footer.legal': 'Legal',
    'footer.legal.imprint': 'Imprint',
    'footer.legal.privacy': 'Privacy',
    'footer.copyright': 'Coremis Switzerland.',
    'footer.madein': 'Made in Switzerland',
  },
  FR: {
    // Nav
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.contact': 'Rendez-vous',
    'nav.contact_cta': 'Demander un entretien',

    // Hero
    'hero.badge': 'Exclusif pour PME suisses',
    'hero.title.1': 'CFO as a Service.',
    'hero.title.2': 'Clarté des Chiffres.',
    'hero.subtitle': 'Nous assumons le rôle de CFO là où la transparence manque. Indépendant, pragmatique et avec un impact mesurable.',
    'hero.btn.contact': 'Prendre rendez-vous',
    'hero.btn.services': 'Voir les services',
    'hero.kpi.volume': 'Volume géré',
    'hero.kpi.mandates': 'Mandats actifs',
    'hero.kpi.time': 'avant première analyse',

    'prob.title': 'Du vol à l\'aveugle au contrôle',
    'prob.text1': 'Lorsque les chiffres arrivent tard, qu\'Excel déborde ou que la liquidité n\'est sûre qu\'au ressenti, les décisions deviennent coûteuses. Un CFO externe crée la transparence, apporte la planification dans un système résilient et rend les rapports de gestion pilotables.',
    'prob.text2': 'Dirigez avec contrôle, pas seulement à l\'instinct.',

    'features.title': 'Une gestion financière qui',
    'features.title_accent': 'accélère les décisions.',
    'features.subtitle': 'Pas de jargon, pas de concepts théoriques. Nous livrons des systèmes qui fonctionnent.',
    'features.card1.title': 'Transparence Radicale',
    'features.card1.desc': 'Reporting et MIS compris en quelques minutes. Nous transformons les cimetières de données en cockpits clairs.',
    'features.card2.title': 'Planification Intégrée',
    'features.card2.desc': 'Budget, prévisions et scénarios stables. Nous relions logiquement compte de résultat, bilan et flux de trésorerie.',
    'features.card3.title': 'Sécurisation des Liquidités',
    'features.card3.desc': 'Planification de trésorerie avec signaux d\'alerte précoces. Pour rester capable d\'agir même en temps volatils.',

    'serv.badge': 'Aperçu des services',
    'serv.title': 'Modulaire, mais guidé.',
    'serv.subtitle': 'Vous ne choisissez pas dans une liste ; nous définissons ensemble le point de départ le plus sensé pour votre situation.',
    'serv.btn': 'Tous les services en détail',
    'serv.1': 'CFO as a Service',
    'serv.2': 'Planification financière & Stratégie',
    'serv.3': 'Budget & Prévisions',
    'serv.4': 'Cashflow & Planification de liquidité',
    'serv.5': 'Reporting & MIS',
    'serv.6': 'Gouvernance, Risque & Conformité',

    'case.title': 'Résultats réels.',
    'case.title_accent': 'Traités discrètement.',
    'case.subtitle': 'En tant que partenaire financier, la confidentialité est notre plus grand atout. Voici quelques exemples anonymisés de notre travail.',
    'case.anon': 'Anonymisé',
    'case.1.ind': 'PME Ingénierie',
    'case.1.res': 'Liquidité augmentée de 20%',
    'case.1.desc': 'Grâce à l\'introduction d\'une prévision glissante sur 13 semaines, les goulots d\'étranglement ont été identifiés 2 mois à l\'avance et éliminés.',
    'case.2.ind': 'Scale-up SaaS',
    'case.2.res': 'Financement série A sécurisé',
    'case.2.desc': 'Préparation de la Due Diligence financière et création d\'un business plan sur 5 ans qui a sécurisé les investisseurs.',
    'case.3.ind': 'Société commerciale',
    'case.3.res': 'Stock optimisé',
    'case.3.desc': 'L\'analyse du capital immobilisé dans les stocks a conduit à une libération de 450k CHF de liquidités en 6 mois.',
    'case.4.ind': 'Prestataire de services',
    'case.4.res': 'Rentabilité +15%',
    'case.4.desc': 'L\'introduction d\'une comptabilité par objets de coûts a révélé des divisions non rentables qui ont été restructurées.',

    'testi.title': 'Voix du terrain',
    'testi.1.quote': 'Honnêtement : Avant Coremis, j\'avais peur de la clôture mensuelle. C\'était toujours un vol à l\'aveugle. Maintenant, je reçois un tableau de bord le 5 du mois et je sais exactement ce que je peux investir.',
    'testi.1.author': 'Thomas K.',
    'testi.1.role': 'Propriétaire, Production',
    'testi.2.quote': 'Nous voulions nous développer, mais la banque a refusé. Coremis a préparé nos chiffres de manière à ce que le prêt soit approuvé en deux semaines. Cela a changé la donne.',
    'testi.2.author': 'Sarah L.',
    'testi.2.role': 'CEO, Startup Tech',
    'testi.3.quote': 'Je n\'avais pas besoin d\'un CFO à temps plein, mais de quelqu\'un pour surveiller le comptable. La collaboration est extrêmement pragmatique. Pas de PowerPoints, juste des solutions.',
    'testi.3.author': 'Michael R.',
    'testi.3.role': 'Président du CA, Commerce',

    'team.title': 'Des têtes plutôt que des concepts.',
    'team.subtitle': 'La finance est une question de confiance. Nous ne sommes pas une agence de conseil anonyme, mais des entrepreneurs qui prennent leurs responsabilités.',
    'team.role.partner': 'Managing Partner',
    'team.role.senior': 'Senior CFO',

    'gloss.title': 'Jargon financier.',
    'gloss.subtitle': 'Nous parlons clairement. Voici quelques termes que nous utilisons souvent.',
    'gloss.ebitda.t': 'EBITDA',
    'gloss.ebitda.d': 'Bénéfice avant intérêts, impôts et amortissements. Montre à quel point votre activité opérationnelle est réellement rentable, sans astuces comptables.',
    'gloss.runway.t': 'Cash Runway',
    'gloss.runway.d': 'Combien de mois l\'entreprise survit-elle avec l\'argent actuel sur le compte si aucune nouvelle recette ne rentre. Vital pour les startups.',
    'gloss.burn.t': 'Burn Rate',
    'gloss.burn.d': 'Combien d\'argent l\'entreprise brûle-t-elle par mois ? Important pour savoir quand de nouveaux capitaux sont nécessaires.',
    'gloss.fcf.t': 'Free Cash Flow',
    'gloss.fcf.d': 'L\'argent qui reste réellement à la fin pour rembourser les dettes ou vous être distribué en tant que propriétaire.',

    'target.title1': 'Pour qui cela convient',
    'target.desc1a': 'Typiquement des PME suisses en croissance, en transformation ou ayant besoin de plus de sécurité dans leur système financier.',
    'target.desc1b': 'Si la comptabilité existe mais que la direction financière manque, le CFO as a Service est l\'étape logique suivante.',
    'target.title2': 'Non adapté',
    'target.desc2a': 'Si seule la comptabilité (saisie), l\'introduction pure de logiciels ou le conseil en gestion théorique classique est recherché.',
    'target.desc2b': 'Nous travaillons de manière opérationnelle et stratégique, mais nous ne remplaçons pas le fiduciaire.',

    'process.badge': 'Le Processus',
    'process.title': 'Comment nous travaillons.',
    'process.subtitle': 'Pas de longs onboardings. Nous créons rapidement de la clarté et passons ensuite à la mise en œuvre opérationnelle.',
    'process.step1.title': 'Premier appel',
    'process.step1.desc': 'Clarification de la situation, des objectifs et des points douloureux aigus. Nous vérifions si l\'alchimie fonctionne et si le mandat convient.',
    'process.step2.title': 'Point de départ',
    'process.step2.desc': 'Création rapide de transparence (Financial Health Check). Nous priorisons l\'essentiel et sécurisons la liquidité.',
    'process.step3.title': 'Mise en œuvre',
    'process.step3.desc': 'Mise en place d\'un système financier stable. Sparring régulier et direction de l\'équipe financière en tant que partenaire intégral.',
    'process.cta': 'Demander un rendez-vous',

    'faq.title': 'Questions fréquentes',
    'faq.q1': 'À partir de quelle taille d\'entreprise le CFO as a Service est-il judicieux ?',
    'faq.a1': 'En général, à partir d\'environ 20 à 250 employés ou un chiffre d\'affaires de 2 millions de CHF. Avant cela, un bon fiduciaire suffit souvent ; ensuite, un CFO interne est souvent embauché.',
    'faq.q2': 'Par où commencer avec des données peu claires ?',
    'faq.a2': 'Nous commençons par un état des lieux (Financial Health Check). D\'abord, nous sécurisons la vue d\'ensemble des liquidités, puis nous structurons la base de données pour un reporting significatif.',
    'faq.q3': 'À quelle vitesse les résultats apparaissent-ils ?',
    'faq.a3': 'Nous créons souvent de la transparence sur la liquidité dès la première semaine. Un système de reporting et de planification entièrement intégré prend 1 à 3 mois selon la complexité.',
    'faq.q4': 'Quelle est la flexibilité de la collaboration ?',
    'faq.a4': 'Très flexible. Nous pouvons être mandatés pour un projet spécifique, comme solution intérimaire ou comme CFO à temps partiel permanent (par ex. 1-4 jours par mois).',
    'faq.q5': 'Remplacez-vous le fiduciaire ?',
    'faq.a5': 'Non. Nous travaillons en étroite collaboration avec votre fiduciaire et la révision. Le fiduciaire s\'occupe des données passées et des clôtures ; nous nous occupons de l\'avenir, du pilotage et de la planification.',

    'chat.welcome': 'Bonjour ! Avez-vous une question sur nos services de CFO ?',
    'chat.placeholder': 'Écrivez un message...',
    'chat.send': 'Envoyer',
    'chat.reply': 'Merci pour votre message. Nous sommes actuellement en réunion mais reviendrons vers vous sous peu.',

    'cta.title': 'La clarté dans les chiffres commence par une conversation',
    'cta.desc': 'Si vous voulez savoir où se trouvent les plus grands leviers et à quelle vitesse la transparence est possible, parlons sans engagement.',
    'cta.btn': 'Demander un entretien',

    'footer.slogan': 'Clarté, contrôlabilité et sécurité pour les PME suisses.',
    'footer.menu': 'Menu',
    'footer.legal': 'Juridique',
    'footer.legal.imprint': 'Mentions légales',
    'footer.legal.privacy': 'Protection des données',
    'footer.copyright': 'Coremis Suisse.',
    'footer.madein': 'Made in Switzerland',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('DE');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};