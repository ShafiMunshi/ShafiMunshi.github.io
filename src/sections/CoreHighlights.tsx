import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Flame, Rocket, Download, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Cpu,
  Flame,
  Rocket,
};

interface CoreHighlightsProps {
  onOpenContact?: () => void;
}

export const CoreHighlights: React.FC<CoreHighlightsProps> = ({ onOpenContact }) => {
  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerConfetti();
    window.open(portfolioData.personal.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Top Header Row with 'Better App, Better Experience' & 'Download CV' */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-emerald-600 dark:text-emerald-400">
              Better App,
            </h3>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-emerald-600 dark:text-emerald-400">
              Better Experience
            </h3>
          </div>

          <div>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-card hover:bg-muted border border-border text-foreground transition-all duration-200 shadow-sm"
            >
              <Download className="w-4 h-4 text-emerald-500" />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.coreHighlights.map((item, index) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm sm:text-base font-display font-bold text-foreground">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View My Work Button */}
        <div className="flex justify-center pt-2">
          <button
            onClick={handleScrollToProjects}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-foreground text-background font-semibold text-xs sm:text-sm hover:opacity-90 shadow-md transition-all duration-200"
          >
            <span>View My Work</span>
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
