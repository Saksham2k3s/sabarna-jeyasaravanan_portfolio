import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

const certificates = [
  {
    id: 'cert-1',
    title: 'NIBRT Bioreactor Operations',
    issuer: 'NIBRT (2025)',
    description: 'Practical training covering GMP-compliant set-up, parameter monitoring, and batch documentation of bioreactor runs.'
  },
  {
    id: 'cert-2',
    title: 'GCP (Good Clinical Practice)',
    issuer: 'PV Drug Safety Academy (2025)',
    description: 'Good Clinical Practice fundamentals, data integrity principles, and pharmaceutical safety compliance.'
  },
  {
    id: 'cert-3',
    title: 'HACCP Compliance Certification',
    issuer: 'Lane7',
    description: 'Hazard Analysis and Critical Control Points protocols, hygiene auditing, and safety compliance.'
  },
  {
    id: 'cert-4',
    title: 'R Programming A-Z',
    issuer: 'Udemy (2024)',
    description: 'Statistical computing, experimental data manipulation, and scientific data visualization in R.'
  },
  {
    id: 'cert-5',
    title: 'Documentation Controller',
    issuer: 'Association of Biotechnologists',
    description: 'Led technical documentation control, log management, and regulatory compliance standards.'
  },
  {
    id: 'cert-6',
    title: 'President, Qubate Society',
    issuer: 'Quizzing and Debating Society',
    description: 'Executive leadership, team coordination, event management, and structured public communication.'
  },
  {
    id: 'cert-7',
    title: 'Peer-Reviewed Research Publication',
    issuer: 'IJPER (2024)',
    description: 'Veerichetty, Sivaraman, Jeyasaravanan et al., Indian Journal of Pharmaceutical Education and Research, 58(3), 965-975.'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Certifications &amp; Credentials</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Verified industry certifications, research publications, and leadership credentials.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div key={cert.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.08 }}>
              <div className="glass-card rounded-2xl p-6 h-full hover-lift flex flex-col relative overflow-hidden group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">{cert.issuer}</span>
                    <h3 className="text-lg font-display font-semibold text-foreground leading-snug">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm font-body mt-2 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
