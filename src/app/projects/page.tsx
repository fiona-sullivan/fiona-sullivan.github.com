import { getAllProjects } from '@/lib/data'
import ProjectCard from '@/components/ui/ProjectCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Fiona F. Sullivan Consulting',
  description: 'Explore humanitarian and international development projects focused on community-driven solutions and crisis response.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">All Projects</h1>
          <p className="section-subtitle">
            Humanitarian and international development projects driven by community engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
