import { Project, Skill, Experience } from '@/types'

// Sample project data
export const projects: Project[] = [
  {
    id: '4',
    title: 'Project Management Consulting',
    description: 'Providing independent project management consulting services for humanitarian and development organizations.',
    longDescription: 'Provide independent project management consulting services for humanitarian and development organizations, supporting programmatic delivery as well as facilities and operations functions. Coordinate day-to-day project administration across multiple engagements; support PMO governance; contribute to client deliverables; and assist with design–build construction projects through cross-functional coordination and schedule tracking.',
    technologies: ['Project Planning', 'PMO Governance', 'Schedule Tracking', 'Cross-Functional Coordination'],
    category: 'consulting',
    featured: true,
    startDate: '2025-04',
    status: 'in-progress',
    role: 'Independent Contractor',
    teamSize: 3,
  },
  {
    id: '1',
    title: 'Disaster Relief Response - Jamaica',
    description: 'Volunteered with Community Organized Relief Effort (CORE) in Jamaica, supporting community-driven humanitarian initiatives and culturally sensitive relief strategies.',
    longDescription: 'Volunteered with Community Organized Relief Effort (CORE) in Jamaica, supporting community-driven humanitarian initiatives by coordinating local health resources, conducting site surveys, supporting GIS tracking, facilitating community meetings, and contributing to UN-aligned reporting and culturally sensitive relief strategies.',
    technologies: ['Community Engagement', 'Crisis Response', 'GIS Tracking', 'UN Reporting', 'Site Surveys'],
    imageUrl: '/projects/jamaica/IMG_9484.jpeg',
    category: 'consulting',
    featured: true,
    startDate: '2025-11',
    endDate: '2025-11',
    status: 'completed',
    role: 'Humanitarian Volunteer',
    teamSize: 20,
    outcomes: [
      'Supported community-driven relief initiatives',
      'Coordinated local health resources',
      'Contributed to UN-aligned reporting',
    ],
  },
  {
    id: '2',
    title: 'COVID-19 Housing & Quarantine Coordination',
    description: 'Supported emergency operations at UC San Diego during the COVID-19 pandemic by coordinating housing logistics and quarantine operations.',
    longDescription: 'Supported emergency operations at UC San Diego during the COVID-19 pandemic by coordinating housing logistics, media communications, and quarantine operations for students. Developed emergency response protocols, facilitated cross-departmental coordination, and provided crisis support.',
    technologies: ['Crisis Management', 'Operations Coordination', 'Emergency Protocols', 'Cross-Departmental Communication'],
    category: 'other',
    featured: true,
    startDate: '2021-10',
    endDate: '2022-05',
    status: 'completed',
    role: 'Housing & Media Coordinator',
    teamSize: 12,
    outcomes: [
      'Developed emergency response protocols',
      'Facilitated cross-departmental coordination',
      'Provided crisis support for students',
    ],
  },
]

// Sample skills data
export const skills: Skill[] = [
  { name: 'Project Planning', category: 'project-management', level: 'expert' },
  { name: 'Stakeholder Management', category: 'communication', level: 'expert' },
  { name: 'Cross-Cultural Communication', category: 'communication', level: 'expert' },
  { name: 'Conflict Resolution', category: 'leadership', level: 'advanced' },
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
