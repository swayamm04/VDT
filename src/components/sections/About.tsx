import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Lightbulb, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Lightbulb,
      label: 'Innovation',
      description: 'Pioneering new digital solutions',
      color: 'bg-yellow-500/10 text-yellow-500',
      delay: 0.1
    },
    {
      icon: TrendingUp,
      label: 'Growth',
      description: 'Driving scalable business results',
      color: 'bg-green-500/10 text-green-500',
      delay: 0.2
    },
    {
      icon: Users,
      label: 'Collaboration',
      description: 'Seamless team integration',
      color: 'bg-blue-500/10 text-blue-500',
      delay: 0.3
    },
    {
      icon: Building2,
      label: 'Enterprise',
      description: 'Robust corporate architectures',
      color: 'bg-purple-500/10 text-purple-500',
      delay: 0.4
    },
  ];

  const stats = [
    { number: '2015', label: 'Founded' },
    { number: '100%', label: 'Success Rate' },
    { number: '24/7', label: 'Global Support' },
    { number: 'ISO', label: 'Certified' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* 1. Title & Badge (Always first on mobile, top of right col on desktop) */}
          <div className="lg:hidden order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit mb-6">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-bold tracking-widest uppercase">Trusted Partner</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {t('about.title')}
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
            </motion.div>
          </div>

          {/* 2. Visual & Stats (Second on mobile, left col on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Visual Asset */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Digital Transformation Team"
                className="w-full h-[300px] md:h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Quick Stats Overlay */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-md p-3 rounded-2xl text-center border border-primary/10 shadow-sm"
                >
                  <div className="text-lg font-bold text-primary mb-0.5">{stat.number}</div>
                  <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3. Content & Features (Third on mobile, right col on desktop) */}
          <div className="flex flex-col order-3 lg:order-2">
            {/* Desktop Only header part */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-widest uppercase">Trusted Partner</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {t('about.title')}
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 font-normal">
                {t('about.description')}
              </p>
            </motion.div>

            {/* Feature Cards - Very Small & Professional */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-slate-400 group-hover:text-primary transition-colors">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">{feature.label}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
