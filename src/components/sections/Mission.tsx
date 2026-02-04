import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import Lottie from 'lottie-react';
import missionAnimation from '@/lib/animations/Mission.json';

export const Mission = () => {
  const { t } = useTranslation();

  return (
    <section id="mission" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* Left Side: Content Wrapper */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 mx-auto lg:mx-0">
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide uppercase">
                  Our Purpose
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                {t('mission.title')}
              </h2>

              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-8 lg:mb-12 mx-auto lg:mx-0" />
            </motion.div>

            {/* Animation for Mobile (Between Title and Description) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:hidden mb-12 relative flex justify-center items-center"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full scale-75 pointer-events-none" />
              <div className="w-full max-w-[400px] relative z-10">
                <Lottie
                  animationData={missionAnimation}
                  loop={true}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                {t('mission.description')}
              </p>
            </motion.div>
          </div>

          {/* Right Side: Animation for Desktop Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex relative justify-center items-center"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full scale-75 pointer-events-none" />
            <div className="w-full max-w-[500px] relative z-10">
              <Lottie
                animationData={missionAnimation}
                loop={true}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3 blur-[100px] pointer-events-none" />
    </section>
  );
};
