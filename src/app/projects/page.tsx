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
    <div className="py-20 min-h-screen" style={{backgroundImage: 'url(/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title" style={{color: '#3c1617', textShadow: '0 2px 4px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(255, 255, 255, 0.3)'}}>All Projects</h1>
          <div className="flex justify-center">
            <p className="section-subtitle inline-block px-4 py-2 rounded-lg" style={{color: '#5e2f29', backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(4px)'}}>
              Humanitarian and development projects driven by community engagement
            </p>
          </div>
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
