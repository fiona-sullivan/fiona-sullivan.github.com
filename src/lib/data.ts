import { Project, Skill, Experience } from '@/types'

// Sample project data
export const projects: Project[] = [
  {
    id: '1',
    title: 'Community Health Crisis Response - Jamaica',
    description: 'Coordinated humanitarian relief efforts with CORE in Jamaica, supporting community-driven health initiatives during crisis response.',
    longDescription: 'Volunteered with CORE to support community-driven humanitarian efforts in Jamaica, coordinating local health resources, facilitating community meetings, and helping implement culturally-sensitive relief strategies.',
    technologies: ['Community Engagement', 'Crisis Response', 'Cross-Cultural Communication', 'Needs Assessment'],
    imageUrl: '/projects/jamaica.jpg',
    category: 'consulting',
    featured: true,
    startDate: '2023-06',
    endDate: '2023-08',
    status: 'completed',
    role: 'Humanitarian Volunteer',
    teamSize: 8,
    outcomes: [
      'Supported 500+ community members',
      'Coordinated local resource distribution',
      'Built lasting community partnerships',
    ],
  },
  {
    id: '2',
    title: 'COVID-19 Housing & Quarantine Coordination',
    description: 'Managed housing operations and quarantine coordination for UC San Diego during the pandemic, ensuring student safety and wellbeing.',
    longDescription: 'Coordinated housing logistics, media communications, and quarantine operations for UC San Diego students during the COVID-19 pandemic. Developed protocols, managed cross-departmental communication, and provided crisis support.',
    technologies: ['Crisis Management', 'Operations Coordination', 'Student Services', 'Health Protocols'],
    imageUrl: '/projects/ucsd.jpg',
    category: 'other',
    featured: true,
    startDate: '2021-10',
    endDate: '2022-05',
    status: 'completed',
    role: 'Housing & Media Coordinator',
    teamSize: 12,
    outcomes: [
      'Managed housing for 1000+ students',
      'Maintained zero outbreak incidents',
      'Developed comprehensive safety protocols',
    ],
  },
  {
    id: '3',
    title: 'International Development Programs',
    description: 'Supporting development initiatives and community engagement through internship with San Diego Diplomacy Council.',
    longDescription: 'Contributed to international development program planning, conducted research on global partnerships, and supported event coordination for diplomatic and humanitarian initiatives.',
    technologies: ['Program Development', 'Research', 'Event Coordination', 'Stakeholder Engagement'],
    imageUrl: '/projects/diplomacy.jpg',
    category: 'consulting',
    featured: true,
    startDate: '2024-02',
    endDate: '2024-05',
    status: 'completed',
    role: 'Development Intern',
    teamSize: 5,
    outcomes: [
      'Coordinated 3 major international events',
      'Supported partnership development',
      'Enhanced program outreach strategies',
    ],
  },
  {
    id: '4',
    title: 'Project Management Consulting',
    description: 'Providing independent project management consulting services for humanitarian and development organizations.',
    technologies: ['Project Planning', 'Stakeholder Management', 'Risk Assessment', 'Resource Coordination'],
    imageUrl: '/projects/consulting.jpg',
    category: 'consulting',
    featured: false,
    startDate: '2025-04',
    status: 'in-progress',
    role: 'Independent Contractor',
    teamSize: 3,
  },
  {
    id: '5',
    title: 'Cross-Cultural Program Development',
    description: 'Developing culturally-sensitive program frameworks based on study abroad experiences in Ghana and Italy.',
    technologies: ['Cultural Competency', 'Program Design', 'Community Partnerships', 'Field Research'],
    imageUrl: '/projects/study-abroad.jpg',
    category: 'design',
    featured: false,
    startDate: '2022-01',
    endDate: '2023-12',
    status: 'completed',
    role: 'Student Researcher',
    teamSize: 4,
  },
]

// Sample skills data
export const skills: Skill[] = [
  { name: 'Crisis Response', category: 'project-management', level: 'advanced' },
  { name: 'Community Engagement', category: 'communication', level: 'expert' },
  { name: 'Cultural Competency', category: 'leadership', level: 'expert' },
  { name: 'Program Coordination', category: 'project-management', level: 'advanced' },
  { name: 'Stakeholder Management', category: 'communication', level: 'advanced' },
  { name: 'Project Planning', category: 'project-management', level: 'advanced' },
  { name: 'Cross-Cultural Communication', category: 'communication', level: 'expert' },
  { name: 'Resource Management', category: 'project-management', level: 'intermediate' },
  { name: 'Conflict Resolution', category: 'leadership', level: 'advanced' },
  { name: 'Strategic Planning', category: 'leadership', level: 'intermediate' },
]

// Sample experience data
export const experience: Experience[] = [
  {
    id: '1',
    company: 'DAR Project Management Consulting LLC',
    position: 'Independent Contractor',
    startDate: 'Apr 2025',
    endDate: 'Present',
    current: true,
    description: 'Providing project management consulting services for humanitarian and development organizations in Washington, DC.',
    achievements: [
      'Delivering project management and event planning support',
      'Coordinating stakeholder engagement activities',
      'Developing project frameworks and implementation strategies',
      'Supporting organizational capacity building initiatives',
    ],
    technologies: ['Project Planning', 'Event Management', 'Stakeholder Coordination'],
  },
  {
    id: '2',
    company: 'American University',
    position: 'Patient Services Representative',
    startDate: 'May 2025',
    endDate: 'Sep 2025',
    current: false,
    description: 'Provided patient services support while developing project management skills in a healthcare setting.',
    achievements: [
      'Coordinated patient services and administrative operations',
      'Applied project management methodologies to service delivery',
      'Enhanced communication and coordination processes',
      'Supported cross-functional team collaboration',
    ],
  },
  {
    id: '3',
    company: 'San Diego Diplomacy Council',
    position: 'Development Intern',
    startDate: 'Feb 2024',
    endDate: 'May 2024',
    current: false,
    description: 'Supported international development initiatives, program planning, and diplomatic event coordination.',
    achievements: [
      'Assisted in planning and executing international engagement events',
      'Conducted research on global partnership opportunities',
      'Supported development program outreach and communications',
      'Coordinated stakeholder engagement activities',
    ],
  },
  {
    id: '4',
    company: 'UC San Diego',
    position: 'Housing and Media Coordinator / Quarantine and Housing Coordinator',
    startDate: 'Oct 2021',
    endDate: 'May 2022',
    current: false,
    description: 'Managed housing operations, media coordination, and quarantine logistics during the COVID-19 pandemic, ensuring student safety and wellbeing.',
    achievements: [
      'Coordinated housing operations for 1000+ students during pandemic',
      'Developed and implemented quarantine protocols and safety measures',
      'Managed cross-departmental communication and media relations',
      'Provided crisis support and resource coordination',
      'Successfully maintained zero outbreak incidents in managed facilities',
    ],
    technologies: ['Crisis Management', 'Operations', 'Communications', 'Protocol Development'],
  },
  {
    id: '5',
    company: 'Rochester Clinical Research',
    position: 'Administrative Assistant',
    startDate: 'May 2015',
    endDate: 'Dec 2021',
    current: false,
    description: 'Provided administrative support for clinical research operations, developing foundational organizational and coordination skills.',
    achievements: [
      'Supported clinical research project administration',
      'Maintained detailed records and documentation systems',
      'Coordinated scheduling and logistics for research activities',
      'Developed strong attention to detail and organizational skills',
    ],
  },
]

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getAllProjects = (): Project[] => {
  return projects
}

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category)
}

export const getSkills = (): Skill[] => {
  return skills
}

export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter(skill => skill.category === category)
}

export const getExperience = (): Experience[] => {
  return experience
}
