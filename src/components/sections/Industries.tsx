import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Building,
  Plane,
  ShoppingBag,
  Heart,
  Shield,
  Landmark,
  Truck
} from 'lucide-react';

export const Industries = () => {
  const { t } = useTranslation();

  const industries = [
    { key: 'construction', icon: Building, gradient: 'from-orange-500/20 to-yellow-500/10' },
    { key: 'travel', icon: Plane, gradient: 'from-blue-500/20 to-cyan-500/10' },
    { key: 'retail', icon: ShoppingBag, gradient: 'from-pink-500/20 to-purple-500/10' },
    { key: 'healthcare', icon: Heart, gradient: 'from-red-500/20 to-rose-500/10' },
    { key: 'insurance', icon: Shield, gradient: 'from-green-500/20 to-emerald-500/10' },
    { key: 'financial', icon: Landmark, gradient: 'from-indigo-500/20 to-blue-500/10' },
    { key: 'automotive', icon: Truck, gradient: 'from-gray-500/20 to-slate-500/10' },
  ];

  return (
    <section id="industries" className="py-24 bg-indigo-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t('industries.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('industries.subtitle')}
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="industry-card h-full">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <industry.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {t(`industries.${industry.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`industries.${industry.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
