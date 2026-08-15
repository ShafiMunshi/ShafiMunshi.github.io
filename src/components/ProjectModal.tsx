import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Smartphone, CheckCircle2, Cpu, AlertCircle, ArrowUpRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { TechBadge } from './TechBadge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'engineering'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                {project.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <Smartphone className="w-3.5 h-3.5" />
                {project.platforms.join(' & ')}
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Project Banner & Title */}
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 bg-muted/40 rounded-xl p-4 border border-border flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-60 w-auto object-contain rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="md:col-span-7 space-y-3">
                <h3 className="text-2xl font-display font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Direct Action Links */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      Google Play
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 dark:bg-slate-700 text-white hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Apple App Store
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-muted text-foreground hover:bg-muted/80 border border-border transition-colors"
                    >
                      GitHub Repository
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-border gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2.5 px-2 text-xs md:text-sm font-medium transition-colors relative ${
                  activeTab === 'overview'
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Product & Overview
                {activeTab === 'overview' && (
                  <motion.div
                    layoutId="activeModalTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                  />
                )}
              </button>

              <button
                onClick={() => setActiveTab('features')}
                className={`pb-2.5 px-2 text-xs md:text-sm font-medium transition-colors relative ${
                  activeTab === 'features'
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Key Features
                {activeTab === 'features' && (
                  <motion.div
                    layoutId="activeModalTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                  />
                )}
              </button>

              <button
                onClick={() => setActiveTab('engineering')}
                className={`pb-2.5 px-2 text-xs md:text-sm font-medium transition-colors relative ${
                  activeTab === 'engineering'
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Engineering & Architecture
                {activeTab === 'engineering' && (
                  <motion.div
                    layoutId="activeModalTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                  />
                )}
              </button>
            </div>

            {/* Tab Contents */}
            <div className="py-2">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                      Product Overview
                    </h4>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {project.problem && (
                    <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs sm:text-sm space-y-1">
                      <div className="flex items-center gap-2 font-medium text-amber-600 dark:text-amber-400">
                        <AlertCircle className="w-4 h-4" />
                        The Problem
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs sm:text-sm space-y-1">
                      <div className="flex items-center gap-2 font-medium text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                        The Engineering Solution
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'features' && (
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/40 border border-border/60 text-xs sm:text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{feat}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'engineering' && (
                <div className="space-y-4">
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Technical Implementation
                    </h4>
                    {project.engineeringHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/40 border border-border/60 text-xs sm:text-sm"
                      >
                        <Cpu className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                      Technologies & Libraries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <TechBadge key={tech} name={tech} highlight />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3.5 border-t border-border bg-muted/20 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-medium rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
