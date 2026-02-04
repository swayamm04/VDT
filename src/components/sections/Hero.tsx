import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BannerSlider } from '@/components/ui/BannerSlider';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-36 lg:pt-0">
      {/* Auto-scrolling Banners (Low Transparency) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BannerSlider />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}


          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">{t('hero.title')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="btn-primary flex items-center gap-2">
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors font-medium">
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Delivered' },
              { value: '50+', label: 'Team Members' },
              { value: '7+', label: 'Industries Served' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}

    </section>
  );
};
