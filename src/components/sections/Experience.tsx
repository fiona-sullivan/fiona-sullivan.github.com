import { getExperience } from '@/lib/data'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const experiences = getExperience()

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey in project management and leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative pl-8 pb-12 ${
                index === experiences.length - 1 ? 'pb-0' : ''
              }`}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />
              )}

              {/* Timeline dot */}
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
      </div>
    </section>
  )
}

export default Experience
