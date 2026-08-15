import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, Terminal, Code2, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-6 sm:py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={about.badge}
          title={about.title}
          subtitle="A look behind the code: my engineering background, core principles, and approach to building reliable mobile software."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            {about.description.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans"
              >
                {paragraph}
              </p>
            ))}

            {/* Philosophy checklist */}
            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
                Core Engineering Mindset
              </h4>
              <div className="space-y-3">
                {about.philosophyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-card border border-border/80 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-semibold text-foreground">
                        {point.title}
                      </h5>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code preview snippet reflecting actual engineering stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="code-window rounded-2xl overflow-hidden shadow-2xl">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-slate-800 text-slate-400 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>shafi_engineer.dart</span>
                </div>
                <span className="text-[10px] text-slate-500">v2.5</span>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-[#080c14]">
                <div className="text-slate-500">// Shafi Munshi: Engineering Profile</div>
                <div className="mt-2">
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-300">MobileEngineer</span>{' '}
                  <span className="text-purple-400">implements</span>{' '}
                  <span className="text-cyan-300">SoftwareCraftsman</span> {'{'}
                </div>

                <div className="pl-4 mt-1 space-y-1">
                  <div>
                    <span className="text-purple-400">final</span> String name ={' '}
                    <span className="text-emerald-400">'{portfolioData.personal.name}'</span>;
                  </div>
                  <div>
                    <span className="text-purple-400">final</span> String focus ={' '}
                    <span className="text-emerald-400">'Flutter, Offline-First & Axum'</span>;
                  </div>
                  <div>
                    <span className="text-purple-400">final</span> String location ={' '}
                    <span className="text-emerald-400">'Dhaka, Bangladesh'</span>;
                  </div>

                  <div className="pt-2 text-slate-500">// Core Capabilities</div>
                  <div>
                    <span className="text-cyan-400">Architecture</span> get architecture =&gt;
                  </div>
                  <div className="pl-4 text-emerald-300">
                    Architecture.clean(offlineFirst: <span className="text-amber-400">true</span>);
                  </div>

                  <div className="pt-2">
                    <span className="text-cyan-400">Future</span>&lt;<span className="text-yellow-300">ProductionResult</span>&gt; buildProduct() <span className="text-purple-400">async</span> {'{'}
                  </div>
                  <div className="pl-4 text-slate-400">
                    <span className="text-purple-400">await</span> database.syncLocalQueues();<br />
                    <span className="text-purple-400">await</span> ui.ensure60Fps();<br />
                    <span className="text-purple-400">return</span> ProductionResult.shipped();
                  </div>
                  <div>{'}'}</div>
                </div>

                <div className="mt-1">{'}'}</div>

                {/* System status readout */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Clean Architecture Verified</span>
                  </div>
                  <span className="text-slate-500">UTF-8 • Dart 3.x</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
