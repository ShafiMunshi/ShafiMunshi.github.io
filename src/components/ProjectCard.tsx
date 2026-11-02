import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Apple, Globe, ArrowUpRight, Info, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const isImageRight = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group relative rounded-3xl bg-card border ${
        project.isFlagship
          ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/5'
          : 'border-border/80'
      } hover:border-emerald-500/60 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 overflow-hidden`}
    >
      {/* Decorative accent for featured projects */}
      {project.isFlagship && (
        <div className="absolute -top-16 -right-16 w-44 h-44 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
      )}

      <div className={`grid md:grid-cols-12 gap-6 lg:gap-8 items-center ${isImageRight ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Mockup Image Container */}
        <div
          onClick={() => onSelect(project)}
          className={`md:col-span-5 flex items-center justify-center bg-muted/40 rounded-2xl p-4 sm:p-6 border border-border/60 group-hover:border-emerald-500/30 transition-all cursor-pointer overflow-hidden ${
            isImageRight ? 'md:order-2' : 'md:order-1'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="max-h-48 sm:max-h-52 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Text & Details Content */}
        <div className={`md:col-span-7 space-y-3.5 flex flex-col justify-center ${isImageRight ? 'md:order-1' : 'md:order-2'}`}>
          {/* Header Row: Title + Platform Badge */}
          <div className="flex items-center justify-between gap-3">
            <h3
              onClick={() => onSelect(project)}
              className="text-xl sm:text-2xl font-display font-bold text-foreground group-hover:text-emerald-500 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>

            <div className="flex items-center gap-2 shrink-0">
              {project.isFlagship && (
                <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Featured
                </span>
              )}
              <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                {project.badge}
              </span>
            </div>
          </div>

          {/* Subtitle / Tagline */}
          <p className="text-sm font-semibold text-foreground/90 leading-snug">
            {project.subtitle}
          </p>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Site</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}

            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-card hover:bg-muted text-foreground border border-border transition-colors shadow-sm"
              >
                <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
                <span>Play Store</span>
              </a>
            )}

            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-card hover:bg-muted text-foreground border border-border transition-colors shadow-sm"
              >
                <Apple className="w-3.5 h-3.5 text-sky-500" />
                <span>App Store</span>
              </a>
            )}

            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/60 transition-colors"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
