export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: ProjectCategory;
  featured: boolean;
  startDate: string;
  endDate?: string;
  status: ProjectStatus;
  role?: string;
  teamSize?: number;
  outcomes?: string[];
}

export type ProjectCategory = 
  | 'web-development'
  | 'mobile-app'
  | 'data-analysis'
  | 'design'
  | 'marketing'
  | 'consulting'
  | 'other';

export type ProjectStatus = 'completed' | 'in-progress' | 'planning';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
}

export type SkillCategory = 
  | 'project-management'
  | 'technical'
  | 'design'
  | 'communication'
  | 'leadership';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
