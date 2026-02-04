import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const footerLinks = [
    { href: '#mission', label: t('nav.mission') },
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#industries', label: t('nav.industries') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <footer className="py-12 bg-primary text-primary-foreground border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="VDT Logo" className="w-24 h-24 object-contain" />
              <span className="font-serif font-bold text-2xl tracking-wide">Vitality Digital Tech</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Accelerating digital innovation and transformation for enterprises worldwide.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-transparent border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};
