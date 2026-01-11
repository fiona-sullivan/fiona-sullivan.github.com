import Link from 'next/link'
import ProjectCard from '@/components/ui/ProjectCard'
import { getFeaturedProjects } from '@/lib/data'

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects()

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Community-driven humanitarian and development initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-center">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
