import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ClipboardList,
  Palette,
  FileText,
  Code2,
  TestTube2,
  Rocket,
  Wrench
} from 'lucide-react';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    { key: 'planning', icon: ClipboardList, step: '01' },
    { key: 'designing', icon: Palette, step: '02' },
    { key: 'defining', icon: FileText, step: '03' },
    { key: 'building', icon: Code2, step: '04' },
    { key: 'testing', icon: TestTube2, step: '05' },
    { key: 'deployment', icon: Rocket, step: '06' },
    { key: 'maintenance', icon: Wrench, step: '07' },
  ];

  return (
    <section id="services" className="py-24 bg-blue-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group card-hover"
            >
              <div className="glass rounded-2xl p-6 h-full relative overflow-hidden">
                {/* Step number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-primary/10 font-display">
                  {service.step}
                </div>

                {/* Icon */}
                <div className="service-icon mb-5">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
