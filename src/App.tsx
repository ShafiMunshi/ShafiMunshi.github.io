import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Hero } from './sections/Hero';
import { CoreHighlights } from './sections/CoreHighlights';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { EngineeringPhilosophy } from './sections/EngineeringPhilosophy';
import { Contact } from './sections/Contact';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const sectionIds = [
    'home',
    'skills',
    'projects',
    'about',
    'experience',
    'philosophy',
    'contact',
  ];
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      {/* Top Sticky Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenContact={() => setContactModalOpen(true)} />
        <Skills />
        <CoreHighlights onOpenContact={() => setContactModalOpen(true)} />
        <Projects />
        <About />
        <Experience />
        <Education />
        <EngineeringPhilosophy />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
};

export default App;
