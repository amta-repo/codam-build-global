import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',

    // Hero Section
    'hero.title': 'Votre Expert en Consulting Construction',
    'hero.subtitle': 'De la planification à la réalisation, CODAM BENIN CONSULTING vous accompagne pour des projets sûrs, rentables et conformes aux normes.',
    'hero.cta.quote': 'Demandez un devis',
    'hero.cta.call': 'Appelez maintenant',
    'hero.cta.contact': 'Nous contacter',

    // Services
    'services.title': 'Nos Services Experts',
    'services.subtitle': 'Solutions complètes pour vos projets de construction',
    'services.management.title': 'Gestion de Projets de Construction',
    'services.management.desc': 'Suivi complet de vos projets de la conception à la livraison',
    'services.feasibility.title': 'Études de Faisabilité & Consulting',
    'services.feasibility.desc': 'Analyses approfondies pour valider la viabilité de vos projets',
    'services.budgeting.title': 'Budgétisation & Estimation des Coûts',
    'services.budgeting.desc': 'Évaluations précises pour optimiser vos investissements',
    'services.risk.title': 'Évaluation des Risques & Conformité',
    'services.risk.desc': 'Identification et mitigation des risques projets',
    'services.training.title': 'Formation & Coaching',
    'services.training.desc': 'Renforcement des capacités de vos équipes',
    'services.quality.title': 'Assurance Qualité & Sécurité',
    'services.quality.desc': 'Garantie de conformité aux standards internationaux',

    // About
    'about.title': 'Excellence en Consulting Construction',
    'about.mission': 'Notre Mission',
    'about.mission.text': 'Accompagner nos clients dans la réussite de leurs projets de construction grâce à notre expertise technique et notre connaissance du marché béninois.',
    'about.vision': 'Notre Vision',
    'about.vision.text': 'Être le leader du consulting en construction au Bénin, reconnu pour notre professionnalisme et la qualité de nos services.',
    'about.values': 'Nos Valeurs',
    'about.values.text': 'Excellence, Intégrité, Innovation et Engagement client sont au cœur de notre approche.',

    // Projects
    'projects.title': 'Nos Réalisations',
    'projects.subtitle': 'Découvrez quelques-uns de nos projets réussis',

    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Prêt à démarrer votre projet ? Discutons-en !',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.company': 'Entreprise (optionnel)',
    'contact.form.service': 'Service souhaité',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le message',
    'contact.info.title': 'Informations de Contact',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Heures d\'ouverture',
    'contact.whatsapp': 'WhatsApp',

    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Trouvez rapidement les réponses à vos questions',

    // Common
    'common.learn_more': 'En savoir plus',
    'common.get_quote': 'Obtenir un devis',
    'common.call_now': 'Appeler maintenant',
    'common.contact_expert': 'Contacter un expert',
    'common.view_projects': 'Voir nos projets',
    'common.our_expertise': 'Notre Expertise',
    'common.why_choose_us': 'Pourquoi nous choisir ?',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',

    // Hero Section
    'hero.title': 'Your Trusted Partner in Construction Consulting & Project Management',
    'hero.subtitle': 'From planning to execution, CODAM BENIN CONSULTING ensures safe, profitable, and compliant projects.',
    'hero.cta.quote': 'Get a Quote',
    'hero.cta.call': 'Call Now',
    'hero.cta.contact': 'Contact Us',

    // Services
    'services.title': 'Our Expert Services',
    'services.subtitle': 'Complete solutions for your construction projects',
    'services.management.title': 'Construction Project Management',
    'services.management.desc': 'Complete oversight from design to delivery',
    'services.feasibility.title': 'Feasibility Studies & Consulting',
    'services.feasibility.desc': 'In-depth analysis to validate project viability',
    'services.budgeting.title': 'Budgeting & Cost Estimation',
    'services.budgeting.desc': 'Precise evaluations to optimize your investments',
    'services.risk.title': 'Risk Assessment & Compliance',
    'services.risk.desc': 'Identification and mitigation of project risks',
    'services.training.title': 'Training & Coaching',
    'services.training.desc': 'Capacity building for your teams',
    'services.quality.title': 'Quality Assurance & Safety',
    'services.quality.desc': 'Guaranteed compliance with international standards',

    // About
    'about.title': 'Excellence in Construction Consulting',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To support our clients in achieving successful construction projects through our technical expertise and knowledge of the Benin market.',
    'about.vision': 'Our Vision',
    'about.vision.text': 'To be the leading construction consulting firm in Benin, recognized for our professionalism and service quality.',
    'about.values': 'Our Values',
    'about.values.text': 'Excellence, Integrity, Innovation, and Client Commitment are at the heart of our approach.',

    // Projects
    'projects.title': 'Our Achievements',
    'projects.subtitle': 'Discover some of our successful projects',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your project? Let\'s discuss!',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company (optional)',
    'contact.form.service': 'Desired Service',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Business Hours',
    'contact.whatsapp': 'WhatsApp',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find quick answers to your questions',

    // Common
    'common.learn_more': 'Learn More',
    'common.get_quote': 'Get a Quote',
    'common.call_now': 'Call Now',
    'common.contact_expert': 'Contact an Expert',
    'common.view_projects': 'View Our Projects',
    'common.our_expertise': 'Our Expertise',
    'common.why_choose_us': 'Why Choose Us?',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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