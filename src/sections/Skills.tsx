import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { TechBadge } from '../components/TechBadge';
import { Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const { toolsAndTechnologies } = portfolioData;

  return (
    <section id="skills" className="py-2 sm:py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-card border border-border text-xs sm:text-sm font-mono font-semibold text-foreground shadow-sm"
        >
          <span>Tools & Technologies</span>
        </motion.div>

        {/* 1-2 Line Pill Container */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto"
        >
          {toolsAndTechnologies.map((tool) => (
            <TechBadge
              key={tool.name}
              name={tool.name}
              highlight={tool.highlight}
              size="md"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
