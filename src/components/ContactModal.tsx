import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MessageSquare, Check, Copy, Send, ArrowUpRight, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.contact.emails[0]);
    setCopiedEmail(true);
    triggerConfetti();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.contact.phones[0]);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi Shafi,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${portfolioData.personal.contact.emails[0]}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    triggerConfetti();
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-card border border-border rounded-2xl shadow-2xl p-6 sm:p-8 z-10 space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">
                Let's Build Something Amazing
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Have a mobile project, backend challenge, or full-time opportunity?
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-between p-3.5 rounded-xl bg-muted/50 hover:bg-muted border border-border text-left transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Primary Email</div>
                  <div className="text-xs font-mono font-medium text-foreground truncate max-w-[140px]">
                    {portfolioData.personal.contact.emails[0]}
                  </div>
                </div>
              </div>
              <span className="text-muted-foreground group-hover:text-emerald-500 text-xs">
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </span>
            </button>

            <a
              href={portfolioData.personal.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/30 text-left transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500 text-white">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Instant Chat</div>
                  <div className="text-xs font-mono font-semibold text-foreground">WhatsApp Direct</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-500" />
            </a>
          </div>

          {/* Direct Send Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-emerald-500 text-foreground placeholder:text-muted-foreground/60"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-emerald-500 text-foreground placeholder:text-muted-foreground/60"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Project Details / Message</label>
              <textarea
                required
                rows={3}
                placeholder="Describe your project, timeline, or role..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-lg bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-emerald-500 text-foreground placeholder:text-muted-foreground/60 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Drafting Email Client...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </>
              )}
            </button>
          </form>

          {/* Social Links Footer */}
          <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border">
            <div className="flex items-center gap-1.5 font-mono">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>{portfolioData.personal.location}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={portfolioData.personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
