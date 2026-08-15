export interface PersonalContact {
  emails: string[];
  phones: string[];
  whatsapp: string;
  whatsappUrl: string;
  address: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface PersonalInfo {
  name: string;
  handle: string;
  role: string;
  title: string;
  bio: string;
  shortBio: string;
  avatar: string;
  location: string;
  resumeUrl: string;
  availability: {
    status: 'available' | 'busy';
    text: string;
  };
  contact: PersonalContact;
}

export interface CoreHighlight {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface AboutSection {
  badge: string;
  title: string;
  description: string[];
  philosophyPoints: {
    title: string;
    description: string;
  }[];
}

export interface ToolTechnology {
  name: string;
  highlight?: boolean;
}

export interface ProjectLinks {
  github?: string;
  playStore?: string;
  appStore?: string;
  website?: string;
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  platforms: string[];
  badge: string;
  isFlagship: boolean;
  image: string;
  shortDescription: string;
  overview: string;
  problem?: string;
  solution?: string;
  keyFeatures: string[];
  engineeringHighlights: string[];
  techStack: string[];
  links: ProjectLinks;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  highlights: string;
}

export interface PhilosophyItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  toolsAndTechnologies: ToolTechnology[];
  coreHighlights: CoreHighlight[];
  about: AboutSection;
  featuredProjects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  engineeringPhilosophy: PhilosophyItem[];
}
