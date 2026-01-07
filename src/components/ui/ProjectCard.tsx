import { Project } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.id}`} className="card group cursor-pointer block">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-400 to-secondary-400 overflow-hidden">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
            project.status === 'completed' 
              ? 'bg-green-100 text-green-800' 
              : project.status === 'in-progress'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          }`}>
            {project.status.replace('-', ' ')}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors z-10 relative"
              aria-label="View on GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors z-10 relative"
              aria-label="View live project"
            >
              <FaExternalLinkAlt className="text-lg" />
            </a>
          )}
          <span className="ml-auto text-primary-600 font-medium text-sm">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
