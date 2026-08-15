import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, BookOpen, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section className="py-6 sm:py-8 border-t border-border/60 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Background"
          title="Education"
          subtitle="Formal foundation in computer science and software engineering principles."
        />

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-start gap-5 shadow-sm"
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-display font-bold text-foreground">
                  {item.degree}
                </h3>
                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                  {item.highlights}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
