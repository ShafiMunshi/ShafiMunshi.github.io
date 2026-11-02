import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Database, 
  Smartphone, 
  Apple,
  Layers, 
  ShieldCheck, 
  ArrowUpRight, 
  RefreshCw, 
  Receipt, 
  Users, 
  Bell, 
  Trash2, 
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { Project } from '../types/portfolio';
import { TechBadge } from './TechBadge';

interface TijarahSpotlightProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const TijarahSpotlight: React.FC<TijarahSpotlightProps> = ({
  project,
  onOpenDetails,
}) => {
  const capabilities = [
    { label: 'POS & Swift Checkout', icon: Receipt },
    { label: 'Multi-Location Inventory', icon: Layers },
    { label: 'Offline-First Engine', icon: Database },
    { label: 'Automatic Cloud Sync', icon: RefreshCw },
    { label: 'Purchase & Vendor Orders', icon: TrendingUp },
    { label: 'Invoice & Thermal Printing', icon: FileCheck },
    { label: 'Staff Role Permissions', icon: Users },
    { label: 'Recycle Bin & Safe Restore', icon: Trash2 },
    { label: 'Low-Stock Push Alerts', icon: Bell },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl bg-gradient-to-b from-card via-card to-muted/30 border-2 border-emerald-500/30 overflow-hidden shadow-2xl shadow-emerald-500/5 mb-16"
    >
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Flagship Banner Tag */}
      <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-500">
          <Sparkles className="w-4 h-4 text-emerald-500" />
          <span>FEATURED PRODUCTION SYSTEM • CASE STUDY</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Production Enterprise Ready</span>
        </div>
      </div>

      <div className="p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Media & Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full bg-muted/40 rounded-2xl p-6 sm:p-8 border border-border flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt="Tijarah POS and Inventory Platform"
                className="max-h-72 sm:max-h-80 w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>

            {/* Architecture pill */}
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/60 px-3.5 py-1.5 rounded-full border border-border">
              <Database className="w-3.5 h-3.5 text-emerald-500" />
              <span>Offline-First • SQLite & Drift Local Store</span>
            </div>
          </div>

          {/* Right Column: Deep Product Description */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-medium mb-3">
                SaaS & Point of Sale System
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-foreground tracking-tight">
                {project.title}
              </h3>
              <p className="text-base sm:text-lg font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                {project.subtitle}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
                A robust, commercial-grade Point-of-Sale (POS) and inventory management ecosystem built for retail stores, wholesalers, and multi-location commercial businesses. Engineered with an offline-first foundation to ensure zero transaction downtime even during complete internet outages.
              </p>
            </div>

            {/* Capability Badges Grid */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Core Production Capabilities
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {capabilities.map((cap, idx) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border border-border/80 text-[11px] sm:text-xs font-medium text-foreground/90"
                    >
                      <Icon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{cap.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack List */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Engineered With
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <TechBadge key={tech} name={tech} highlight />
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenDetails(project)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Read Full Engineering Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {project.links.playStore && (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-muted hover:bg-muted/80 text-foreground border border-border transition-all duration-200"
                >
                  <Smartphone className="w-4 h-4 text-emerald-500" />
                  <span>Google Play</span>
                </a>
              )}

              {project.links.appStore && (
                <a
                  href={project.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-muted hover:bg-muted/80 text-foreground border border-border transition-all duration-200"
                >
                  <Apple className="w-4 h-4 text-sky-500" />
                  <span>App Store</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
