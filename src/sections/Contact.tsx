import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Send,
  Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { triggerConfetti } from '../utils/confetti';

export const Contact: React.FC = () => {
  const { contact } = portfolioData.personal;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.emails[0]);
    setCopiedEmail(true);
    triggerConfetti();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contact.phones[0]);
    setCopiedPhone(true);
    triggerConfetti();
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi Shafi,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${contact.emails[0]}?subject=${subject}&body=${body}`;
    setIsSent(true);
    triggerConfetti();
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section id="contact" className="py-6 sm:py-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build Something Exceptional"
          subtitle="Whether you have an offline-first mobile app idea, need an enterprise POS/FinTech architecture, or want to discuss full-stack engineering—I'm ready."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Communication channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Email Card */}
            <div className="p-5 rounded-2xl bg-card border border-border/80 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground uppercase">Direct Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-1 pt-1">
                <a
                  href={`mailto:${contact.emails[0]}`}
                  className="block font-mono text-sm font-semibold text-foreground hover:text-emerald-500 transition-colors truncate"
                >
                  {contact.emails[0]}
                </a>
                <a
                  href={`mailto:${contact.emails[1]}`}
                  className="block font-mono text-xs text-muted-foreground hover:text-foreground transition-colors truncate"
                >
                  {contact.emails[1]}
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/30 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
                      Instant Messaging
                    </div>
                    <div className="text-sm font-bold text-foreground">
                      Chat on WhatsApp
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Fastest way to reach me for project inquiries and quick questions.
              </p>
            </a>

            {/* Direct Phone Numbers */}
            <div className="p-5 rounded-2xl bg-card border border-border/80 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-sky-500/10 text-sky-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground uppercase">Phone & WhatsApp</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-1 pt-1 text-sm font-mono font-medium text-foreground">
                <a href={`tel:${contact.phones[0]}`} className="block hover:text-emerald-500 transition-colors">
                  {contact.phones[0]}
                </a>
                <a href={`tel:${contact.phones[1]}`} className="block text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {contact.phones[1]}
                </a>
              </div>
            </div>

            {/* Location & Socials */}
            <div className="p-5 rounded-2xl bg-card border border-border/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground font-mono">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={contact.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-display font-bold text-foreground">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Drop a message and I'll respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-emerald-500 text-foreground placeholder:text-muted-foreground/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-emerald-500 text-foreground placeholder:text-muted-foreground/60 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                    Project Requirements / Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product requirements, tech stack, or engineering challenges..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-emerald-500 text-foreground placeholder:text-muted-foreground/60 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-md hover:-translate-y-0.5"
                >
                  {isSent ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Opening Email Client...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
