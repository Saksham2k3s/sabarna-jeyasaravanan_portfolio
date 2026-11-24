import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Mail, Linkedin, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    { icon: Mail, label: 'Email', value: 'sabarnajeyas6503@gmail.com', href: 'mailto:sabarnajeyas6503@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/sabarna-jeyasaravanan', href: 'https://www.linkedin.com/in/sabarna-jeyasaravanan', external: true },
    { icon: Phone, label: 'Phone', value: '+353 899682104', href: 'tel:+353899682104' },
    { icon: MapPin, label: 'Location', value: 'Dublin, Ireland', href: null },
  ];

  return (
    <section id="contact" className="py-24 relative bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="section-container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Let's Connect</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Open to QC Analyst, Bioprocess Associate, and Associate Scientist opportunities in Ireland.</p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }} className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 text-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
              {contactItems.map((item) => (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group p-4 sm:p-5 rounded-2xl bg-secondary/80 hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center w-full min-w-0 overflow-hidden"
                  >
                    <div className="flex flex-col items-center gap-3 w-full min-w-0">
                      <div className="p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:scale-110 transition-transform shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="w-full min-w-0 px-1">
                        <p className="text-xs text-muted-foreground mb-1.5 font-body">{item.label}</p>
                        <p className="text-xs sm:text-sm font-medium text-foreground font-display flex items-center justify-center gap-1 max-w-full leading-snug break-all">
                          <span>{item.value}</span>
                          {item.external && <ArrowUpRight className="w-3.5 h-3.5 text-primary shrink-0 inline" />}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="group p-4 sm:p-5 rounded-2xl bg-secondary/80 border border-transparent flex flex-col items-center text-center w-full min-w-0 overflow-hidden"
                  >
                    <div className="flex flex-col items-center gap-3 w-full min-w-0">
                      <div className="p-3 rounded-full bg-primary/10 border border-primary/30 shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="w-full min-w-0 px-1">
                        <p className="text-xs text-muted-foreground mb-1.5 font-body">{item.label}</p>
                        <p className="text-xs sm:text-sm font-medium text-foreground font-display max-w-full leading-snug break-all">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <GradientButton asChild><a href="mailto:sabarnajeyas6503@gmail.com"><Mail className="w-4 h-4 mr-2" />Send Email</a></GradientButton>
              <GradientButton variant="variant" asChild><a href="https://www.linkedin.com/in/sabarna-jeyasaravanan" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4 mr-2" />Connect on LinkedIn</a></GradientButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
