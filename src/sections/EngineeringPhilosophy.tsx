import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { Database, ShieldCheck, Zap, HeartHandshake, Layers } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Database,
  ShieldCheck,
  Zap,
  HeartHandshake,
};

export const EngineeringPhilosophy: React.FC = () => {
  const { engineeringPhilosophy } = portfolioData;

  return (
    <section id="philosophy" className="py-6 sm:py-8 bg-muted/20 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Guiding Principles"
          title="Engineering Philosophy"
          subtitle="How I think about system design, code craftsmanship, and building software that lasts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {engineeringPhilosophy.map((item, index) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-card border border-border hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono font-bold text-muted-foreground/60">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
