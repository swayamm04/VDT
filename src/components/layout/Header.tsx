"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#mission', label: t('nav.mission') },
    { href: '#about', label: t('nav.about') },
    { href: '#admin', label: t('nav.admin') },
    { href: '#services', label: t('nav.services') },
    { href: '#technologies', label: t('nav.technologies') },
    { href: '#industries', label: t('nav.industries') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-0 border-b border-border'
          : 'bg-transparent py-2'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled ? 'h-20' : 'h-28 lg:h-24'}`}>
            <motion.a
              href="#"
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/logo.png"
                alt="VDT Logo"
                className={`object-contain transition-all duration-500 ease-in-out ${isScrolled ? 'w-16 h-16 lg:w-14 lg:h-14' : 'w-24 h-24 lg:w-20 lg:h-20'}`}
              />
              <span className={`hidden sm:block font-serif tracking-wide transition-colors duration-500 ease-in-out font-bold ${isScrolled ? 'text-lg text-foreground' : 'text-xl lg:text-2xl text-white/90'}`}>
                Vitality Digital Tech
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`nav-link px-4 py-2 text-sm font-medium transition-colors duration-500 ease-in-out ${isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
                    }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Right Side: Language Switcher + Mobile Menu */}
            <div className="flex items-center gap-2">
              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium outline-none ${isScrolled
                  ? 'bg-secondary/50 hover:bg-secondary text-foreground'
                  : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}>
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:block">{currentLanguage.flag} {currentLanguage.name}</span>
                  <span className="sm:hidden">{currentLanguage.flag}</span>
                  <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass border-border">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`cursor-pointer ${i18n.language === lang.code ? 'bg-primary/10' : ''}`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled
                  ? 'bg-secondary/50 hover:bg-secondary text-foreground'
                  : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Sidebar - Moved outside <header> to avoid backdrop-filter clipping */}

      {/* Mobile Navigation Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop / Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            {/* Sidebar */}
            <motion.nav
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[70] flex flex-col shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-serif font-bold text-xl text-primary">VDT</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg bg-secondary/50 text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-2">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="px-6 py-4 rounded-xl transition-all text-muted-foreground font-medium flex items-center justify-start group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>

            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
