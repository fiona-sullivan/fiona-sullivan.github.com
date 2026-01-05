import { getSkills, getExperience } from '@/lib/data'
import SkillCard from '@/components/ui/SkillCard'
import Image from 'next/image'
import type { Metadata } from 'next'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About | Fiona Sullivan',
  description: 'Learn about my background in humanitarian work, international development, and community-driven project management.',
}

export default function AboutPage() {
  const skills = getSkills()
  const experiences = getExperience()

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container-custom">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="card p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex-shrink-0" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  About Me
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  I'm passionate about building a humanitarian career that sits at the 
                  intersection of global relief work and project management. My background in 
                  International Security & Conflict Resolution, combined with hands-on roles in 
                  project coordination and crisis response, has shaped my human-centered approach 
                  to problem solving.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  I've studied abroad in Ghana and Italy, volunteered with CORE in Jamaica to 
                  support community-driven humanitarian efforts, and worked in project-focused 
                  roles at UC San Diego during the pandemic. I'm currently expanding my operational 
                  and leadership skills through Georgetown University's Project Management program.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  My goal is to contribute to humanitarian and international development projects 
                  that require strong coordination, cultural sensitivity, and solutions built 
                  with — not just for — communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative pl-8 pb-12 ${
                  index === experiences.length - 1 ? 'pb-0' : ''
                }`}
              >
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />
                )}
                <div className="absolute left-0 top-0 bg-primary-600 rounded-full p-2">
                  <FaBriefcase className="text-white text-sm" />
                </div>
                <div className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-primary-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                  <FaGraduationCap className="text-2xl text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Project Management Certificate
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">
                    Georgetown University
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    In Progress
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                  <FaGraduationCap className="text-2xl text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    BA, International Security & Conflict Resolution
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">
                    UC San Diego
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Graduated 2024
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                  <FaGraduationCap className="text-2xl text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Study Abroad Program
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">
                    Ghana & Italy
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Cross-cultural immersion and field research
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                  <FaGraduationCap className="text-2xl text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Humanitarian Volunteer
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">
                    CORE - Jamaica
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Community-driven humanitarian relief efforts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
