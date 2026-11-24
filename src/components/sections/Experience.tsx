import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Manufacturing Operator II',
    company: 'Jabil, Bray',
    period: 'Nov 2026 – Present',
    highlights: [
      'Conduct in-process quality screening of medical devices to defined specifications, identifying and segregating non-conforming product before release.',
      'Collaborate daily with a cleanroom team of 11-15 to resolve automation line issues and maintain consistent production quality.',
      'Accurately complete Batch Manufacturing Records (BMR) in real time, ensuring full traceability and audit readiness under GDP and GMP standards.',
      'Perform routine in-process checks and verifications on products and equipment, documenting results in line with SOPs and quality procedures.',
      'Escalate deviations and equipment faults promptly to the line coordinator or manager, supporting containment and corrective action.',
      'Package and label finished devices to meet regulatory and customer requirements, protecting product integrity.',
      'Follow SOPs, work instructions, and EHS requirements in a controlled cleanroom environment to ensure compliance and safety.'
    ]
  },
  {
    title: 'Research Student, Cell Line Engineering',
    company: 'University College Dublin',
    period: 'Feb 2025 – Sep 2025',
    highlights: [
      'Achieved 1.14% site-specific integration efficiency in a CHO cell line by executing RMCE workflows under documented controls, supporting practical cell line development.',
      'Reduced re-tests by 15% across 20 experimental batches by applying root cause analysis to inconsistent results and correcting method steps, enabling faster results delivery.',
      'Reviewed 20 experimental batches for accuracy and completeness by cross-checking records to ALCOA principles.',
      'Maintained 100% on-schedule equipment calibration compliance by tracking and documenting calibration records.',
      'Prepared cell culture media, performed filtration and protein purification, and conducted cleaning validation during flow cytometry operation, all documented to GMP-style standards.',
      'Operated a plate reader and UV-Vis spectrophotometer, recording all work in ELN and batch records, and authored a formal MEngSc thesis.'
    ]
  },
  {
    title: 'Research Intern',
    company: 'ICAR',
    period: 'May 2023 – Jul 2023',
    highlights: [
      'Processed 7 sample sets across plant varieties with full traceability, using PCR, ELISA, and Western blot under GLP handling.',
      'Documented results and sample chain of custody to support reproducible, auditable data.'
    ]
  },
  {
    title: 'Laboratory Intern, Microbiology',
    company: 'VJ Biotech Laboratory',
    period: 'Feb 2022 – May 2022',
    highlights: [
      'Reduced PCR error rate by 20% by tightening sample preparation and documentation, improving repeat-run consistency.',
      'Prepared culture media and performed microbial culturing, colony counting, and Gram staining as part of formal microbiology practicals.',
      'Maintained equipment and calibration logs with zero non-conformances and zero reagent stockouts.'
    ]
  },
  {
    title: 'Deli Assistant / Barista',
    company: "O'Briens",
    period: 'Mar 2026 – Oct 2026',
    highlights: [
      'Completed 3 weekly inventory checks with zero discrepancies, maintained hygiene standards, and handled customer complaints on the spot or escalated them.'
    ]
  },
  {
    title: 'Team Member',
    company: 'Lane7',
    period: 'Jan 2025 – Mar 2026',
    highlights: [
      'Named Team Member of the Year; worked reliable shift rotations, trained new starters, and applied HACCP food safety practice.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-24 pb-12 relative">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Work Experience</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Demonstrated track record across cleanroom manufacturing, cell line engineering research, and GLP/GMP laboratory environments.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 hover-lift relative overflow-hidden group">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/25 via-primary/15 to-transparent" />
                <div className="relative z-10 flex flex-col">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/30"><Briefcase className="w-5 h-5 text-primary" /></div>
                        <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">{exp.title}</h3>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground shrink-0"><Calendar className="w-4 h-4" /><span className="text-sm font-body">{exp.period}</span></div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground font-body text-sm sm:text-base">
                        <span className="text-primary mt-1.5 shrink-0">▹</span><span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
