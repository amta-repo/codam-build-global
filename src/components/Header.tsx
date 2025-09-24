import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Phone, Mail, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import codamLogo from '@/assets/codam-logo.png';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.faq'), href: '/faq' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/+22901967576639" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
              >
                <MessageCircle className="h-3 w-3" />
                <span className="hidden sm:inline">+229 01 96 75 76 39</span>
              </a>
              <div className="hidden md:flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>contact@codambenin.com</span>
              </div>
              {/* Social media icons for mobile */}
              <div className="md:hidden flex items-center space-x-3">
                <a 
                  href="https://www.facebook.com/codambenin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Facebook className="h-3 w-3" />
                </a>
                <a 
                  href="https://www.instagram.com/codambenin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Instagram className="h-3 w-3" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/codambenin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-xs">F82W+4P Abomey Calavi, Atlantique Benin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={codamLogo} 
              alt="CODAM BENIN CONSULTING" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">CODAM BENIN</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wide">CONSULTING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center border border-border rounded-md overflow-hidden">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  language === 'fr' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>
            <Button variant="gold" size="sm" asChild>
              <Link to="/contact">
                {t('hero.cta.quote')}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center border border-border rounded-md overflow-hidden">
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`px-3 py-1 text-xs font-medium transition-colors ${
                      language === 'fr' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 text-xs font-medium transition-colors ${
                      language === 'en' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    EN
                  </button>
                </div>
                <Button variant="gold" size="sm" asChild>
                  <Link to="/contact">
                    {t('hero.cta.quote')}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;