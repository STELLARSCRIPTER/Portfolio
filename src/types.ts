export interface ExperienceItem {
  id: string;
  company: string;
  location?: string;
  position: string;
  duration: string;
  responsibilities: string[];
  tech: string[];
  logoType?: 'consulting' | 'digital' | 'default';
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: string[];
  icon: string; // Name of Lucide icon
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  category: string;
  tech: string[];
  imageType: 'dashboard' | 'campaign' | 'crm' | 'bi' | 'stats';
  caseStudyMetrics?: { label: string; value: string }[];
  keyOutcomes?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
