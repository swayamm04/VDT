import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BellRing, FileText, LayoutGrid, ArrowRight } from 'lucide-react';

export const Admin = () => {
  const { t } = useTranslation();

  const adminLinks = [
    {
      icon: BellRing,
      label: t('admin.notifications'),
      href: '#',
    },
    {
      icon: FileText,
      label: t('admin.jobApplication'),
      href: '#',
    },
    {
      icon: LayoutGrid,
      label: t('admin.serviceApplication'),
      href: '#',
    },
  ];

  return (
    <section id="admin" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {t('admin.title')}
            </h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full mb-6" />
          </div>

          {/* Admin Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 md:p-10 border border-border/50"
          >
            <h3 className="font-display text-xl md:text-2xl font-semibold text-center mb-3">
              {t('admin.subtitle')}
            </h3>

            <p className="text-muted-foreground text-center mb-8">
              {t('admin.description')}
            </p>

            <div className="flex flex-col gap-3">
              {adminLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center justify-between p-4 rounded-xl bg-white border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <link.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-foreground">{link.label}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
