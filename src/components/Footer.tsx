import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import codamLogo from '@/assets/codam-logo.png';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.faq'), href: '/faq' },
  ];

  const services = [
    t('services.management.title'),
    t('services.feasibility.title'),
    t('services.budgeting.title'),
    t('services.risk.title'),
    t('services.training.title'),
    t('services.quality.title'),
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={codamLogo} 
                alt="CODAM BENIN CONSULTING" 
                className="h-10 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg">CODAM BENIN</span>
                <span className="text-xs opacity-90 uppercase tracking-wide">CONSULTING</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              {t('about.mission.text')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover-gold">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="hover-gold">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('nav.services')}</h3>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <span className="text-sm opacity-90">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('contact.info.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-gold" />
                <div className="text-sm opacity-90">
                  <p>Cotonou, Bénin</p>
                  <p>Quartier Fidjrossè</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+22901967576390" className="text-sm opacity-90 hover:text-gold transition-colors">
                  +229 01 96 75 76 39
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:contact@codambenin.com" className="text-sm opacity-90 hover:text-gold transition-colors">
                  contact@codambenin.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90">
              © 2024 CODAM BENIN CONSULTING. Tous droits réservés.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm opacity-90 hover:text-gold transition-colors">
                Politique de Confidentialité
              </Link>
              <Link to="/terms" className="text-sm opacity-90 hover:text-gold transition-colors">
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;