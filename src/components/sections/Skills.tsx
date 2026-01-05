import SkillCard from '@/components/ui/SkillCard'
import { getSkills } from '@/lib/data'

const Skills = () => {
  const skills = getSkills()

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Core competencies that drive project success
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
