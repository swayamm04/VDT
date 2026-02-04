import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Monitor,
  Cloud,
  Database,
  Shield,
  Cpu,
  Globe,
  Layers
} from 'lucide-react';

export const Technologies = () => {
  const { t } = useTranslation();

  const techCategories = [
    { icon: Smartphone, label: 'Mobile', items: ['React Native', 'Flutter', 'iOS', 'Android'] },
    { icon: Monitor, label: 'Web', items: ['React', 'Angular', 'Vue', 'Next.js'] },
    { icon: Cloud, label: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'Docker'] },
    { icon: Database, label: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
    { icon: Shield, label: 'Security', items: ['OAuth', 'JWT', 'SSL/TLS', 'Encryption'] },
    { icon: Cpu, label: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI', 'LLMs'] },
    { icon: Globe, label: 'DevOps', items: ['CI/CD', 'Kubernetes', 'Terraform', 'Jenkins'] },
    { icon: Layers, label: 'Backend', items: ['Node.js', 'Python', 'Java', 'Go'] },
  ];

  return (
    <section id="technologies" className="py-24 bg-cyan-50/50 relative overflow-hidden">


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
            {t('technologies.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('technologies.description')}
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-hover"
            >
              <div className="glass rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{category.label}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary/50 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
