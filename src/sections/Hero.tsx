import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  ArrowUpRight, 
  MessageSquare, 
  MapPin, 
  Download, 
  Sparkles,
  Smartphone,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerConfetti();
    window.open(portfolioData.personal.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative flex items-center justify-center pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Intro & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-1"
            >
              <div className="text-sm sm:text-base font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
                Hi, I'm {portfolioData.personal.name}!
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-foreground tracking-tight leading-[1.15]">
                Mobile App Developer
              </h1>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              A full stack mobile app developer based in Bangladesh. Specializing in <span className="text-foreground font-semibold">Flutter</span>, <span className="text-foreground font-semibold">Offline-First</span> architecture, and backend systems with <span className="text-foreground font-semibold">Rust (Axum)</span>. Need a mobile app? Let's build something amazing together!
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Say Hello</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card hover:bg-muted text-foreground border border-border font-semibold text-sm transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-emerald-500" />
              </a>

              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                title="Get Resume / CV"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </motion.div>

            {/* Location & Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-3 text-xs font-mono text-muted-foreground"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>{portfolioData.personal.location}</span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={portfolioData.personal.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.personal.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-opacity"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Profile Image Arch Container */}
              <div className="relative mx-auto w-60 sm:w-64 h-72 sm:h-80 rounded-[2.5rem] p-2 bg-gradient-to-b from-emerald-500/30 via-teal-500/10 to-transparent shadow-xl overflow-hidden border border-emerald-500/30">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover rounded-[2rem] grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay status badge */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-background/85 backdrop-blur-md border border-border shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-mono font-medium text-foreground">Full-Stack & Mobile</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-500">{portfolioData.featuredProjects.length}+ Products Shipped</span>
                </div>
              </div>

              {/* Floating Chips */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-3 p-2.5 rounded-xl bg-card border border-border shadow-lg flex items-center gap-2 text-xs font-mono"
              >
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <div className="font-semibold text-foreground text-xs">Flutter & Dart</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -right-3 p-2.5 rounded-xl bg-card border border-border shadow-lg flex items-center gap-2 text-xs font-mono"
              >
                <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-500">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div className="font-semibold text-foreground text-xs">Offline-First Sync</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
