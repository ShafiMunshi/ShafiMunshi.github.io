import React from 'react';
import { MessageSquare, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FlutterIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-card/50 text-foreground pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-6 border-b border-border/60">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/40"
              />
              <div>
                <h4 className="font-display font-bold text-lg text-foreground">
                  {portfolioData.personal.name}
                </h4>
                <p className="text-xs text-muted-foreground font-mono">
                  {portfolioData.personal.role}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              Engineering high-performance mobile applications, offline-first architectures, and scalable full-stack products with precision and clean code principles.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Message"
                className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details from Original Website */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
              Direct Contact & Location
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{portfolioData.personal.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="flex flex-col">
                  <a href={`mailto:${portfolioData.personal.contact.emails[0]}`} className="hover:text-foreground transition-colors">
                    {portfolioData.personal.contact.emails[0]}
                  </a>
                  <a href={`mailto:${portfolioData.personal.contact.emails[1]}`} className="text-xs opacity-80 hover:text-foreground transition-colors">
                    {portfolioData.personal.contact.emails[1]}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${portfolioData.personal.contact.phones[0]}`} className="hover:text-foreground transition-colors">
                    {portfolioData.personal.contact.phones[0]}
                  </a>
                  <a href={`tel:${portfolioData.personal.contact.phones[1]}`} className="text-xs opacity-80 hover:text-foreground transition-colors">
                    {portfolioData.personal.contact.phones[1]}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Quick Navigation
              </h5>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <a href="#about" className="hover:text-foreground transition-colors">About</a>
                <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
                <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
                <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
                <a href="#philosophy" className="hover:text-foreground transition-colors">Philosophy</a>
                <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors font-semibold col-span-2 flex items-center gap-1 pt-1"
                >
                  <span>View Resume / CV</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground hover:text-foreground p-2 rounded-lg bg-muted/60 hover:bg-muted transition-colors border border-border"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
