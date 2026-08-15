import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { TechBadge } from '../components/TechBadge';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-6 sm:py-8 bg-muted/20 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Professional Track Record"
          title="Engineering Experience"
          subtitle="Real-world commercial experience designing, building, and maintaining production applications for enterprise ERP clients and consumer markets."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-lg relative overflow-hidden"
            >
              {/* Timeline Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
                <div>
                  <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {item.company}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mt-2">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mt-1.5">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                {item.summary}
              </p>

              {/* Key Contributions & Solutions */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <span>Key Engineering Deliverables & Impact</span>
                </h4>
                <div className="space-y-2.5">
                  {item.achievements.map((ach, achIdx) => (
                    <div
                      key={achIdx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-muted/40 border border-border/60 text-xs sm:text-sm text-foreground/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Utilized */}
              <div className="mt-6 pt-6 border-t border-border/60">
                <div className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">
                  Technologies & Ecosystem
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map(tech => (
                    <TechBadge key={tech} name={tech} highlight />
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
