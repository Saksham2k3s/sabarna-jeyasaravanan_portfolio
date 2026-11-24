import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Bioprocessing & Cell Culture',
    color: 'from-purple-500 to-purple-600',
    skills: [
      'CHO cell culture',
      'RMCE cell line engineering',
      'media preparation',
      'inoculation',
      'filtration',
      'protein purification',
      'bioreactor operations (NIBRT)',
      'in-process testing',
      'aseptic technique'
    ]
  },
  {
    title: 'Analytical & Laboratory Techniques',
    color: 'from-purple-600 to-purple-700',
    skills: [
      'PCR',
      'ELISA',
      'Western blot',
      'flow cytometry',
      'microbial culturing',
      'colony counting',
      'Gram staining',
      'plate reader assays',
      'UV-Vis',
      'HPLC (fundamentals)',
      'FTIR',
      'GC-MS',
      'autoclave',
      'pH and sample preparation'
    ]
  },
  {
    title: 'Quality, Compliance & Documentation',
    color: 'from-purple-500 to-violet-600',
    skills: [
      'cGMP',
      'GLP',
      'ALCOA data integrity',
      'GMP and batch documentation',
      'SOP adherence',
      'calibration and equipment records',
      'cleaning validation',
      'HACCP',
      'EHS',
      'GCP awareness'
    ]
  },
  {
    title: 'Investigations & Problem Solving',
    color: 'from-violet-500 to-purple-600',
    skills: [
      'Root cause analysis',
      'troubleshooting',
      'deviation and non-conformance reporting',
      'trend review',
      'CAPA awareness',
      'waste and re-test reduction'
    ]
  },
  {
    title: 'Data & Digital Systems',
    color: 'from-purple-600 to-indigo-600',
    skills: [
      'LIMS',
      'ELN',
      'electronic and paperless records',
      'Microsoft Excel',
      'R programming',
      'data entry and analysis',
      'inventory and stock systems'
    ]
  },
  {
    title: 'Teamwork & Communication',
    color: 'from-purple-500 to-fuchsia-600',
    skills: [
      'Shift team working',
      'training and onboarding',
      'documentation control',
      'clear written and verbal reporting'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Core Skills</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Bioprocessing, analytical laboratory techniques, quality compliance, and digital data systems.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden group hover-lift">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.color}`} />
                <h3 className="text-xl font-display font-semibold text-foreground mb-6 pt-2">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-foreground font-body">
                      {skill}
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

export default Skills;
