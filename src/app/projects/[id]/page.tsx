import { getProjectById, getAllProjects } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendar, FaUsers } from 'react-icons/fa'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(params.id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Fiona F. Sullivan Consulting`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container-custom max-w-5xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>

        <div className="card p-8">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                project.status === 'completed' 
                  ? 'bg-green-100 text-green-800' 
                  : project.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {project.status.replace('-', ' ')}
              </span>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{project.startDate} - {project.endDate || 'Present'}</span>
              </div>
              {project.teamSize && (
                <div className="flex items-center gap-2">
                  <FaUsers />
                  <span>{project.teamSize} Team Members</span>
                </div>
              )}
              {project.role && (
                <div>
                  <span className="font-semibold">Role:</span> {project.role}
                </div>
              )}
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <FaGithub />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FaExternalLinkAlt />
                  View Live
                </a>
              )}
            </div>
          </div>

          {/* Project Image */}
          {project.imageUrl && (
            <div className="relative h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg overflow-hidden mb-8">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Project Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Key Competencies
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Key Outcomes
              </h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary-600 dark:text-primary-400 text-xl mr-3">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
