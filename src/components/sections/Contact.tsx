import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "02ff6ab3-748f-474c-8307-a40c4069826b",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "VDT Website Contact"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(`Web3Forms Error: ${result.message || 'Check your Access Key'}`);
        console.error("Submission failed:", result);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Could not connect to the mail server. Please check your internet.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="pt-16 pb-24 bg-rose-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              {t('contact.title')}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-2" />
            <p className="text-lg text-muted-foreground mb-1">
              {t('contact.subtitle')}
            </p>

            <p className="text-muted-foreground mb-1 leading-relaxed text-sm">
              {t('contact.description')}
            </p>

            {/* Google Map Integration - Precise Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border-2 border-slate-300 shadow-lg h-[220px] w-full max-w-xl relative group mb-1"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.227605639916!2d75.64483167485851!3d13.885334486520614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbabb648dc7f69%3A0x5d1eb2103759576c!2sVitality%20Digital%20Tech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770233120177!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Contact Info - Now Closer to Map */}
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">{t('contact.email')}</div>
                  <a href={`mailto:${t('contact.emailValue')}`} className="text-sm font-medium hover:text-primary transition-colors">
                    {t('contact.emailValue')}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">{t('contact.address')}</div>
                  <div className="text-sm font-medium">{t('contact.addressValue')}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`btn-accent w-full flex items-center justify-center gap-2 transition-all duration-300 ${isSuccess ? 'bg-primary text-white border-transparent' : ''
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    'Message Sent Successfully!'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {isSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-primary font-medium"
                  >
                    Thank you! We'll get back to you shortly.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
