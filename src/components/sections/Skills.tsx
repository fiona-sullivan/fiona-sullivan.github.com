import SkillCard from '@/components/ui/SkillCard'
import { getSkills } from '@/lib/data'

const Skills = () => {
  const skills = getSkills()

  return (
    <section className="py-20" style={{backgroundColor: '#f5f1ea'}}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title" style={{color: '#3c1617', textShadow: '0 2px 4px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(255, 255, 255, 0.3)'}}>Skills & Expertise</h2>
          <p className="section-subtitle" style={{color: '#5e2f29', backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(4px)'}}>
            Core competencies that drive project success
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
