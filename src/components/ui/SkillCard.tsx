import { Skill } from '@/types'
import { 
  FaProjectDiagram, 
  FaCode, 
  FaPalette, 
  FaComments, 
  FaUserTie 
} from 'react-icons/fa'

interface SkillCardProps {
  skill: Skill
}

const categoryIcons = {
  'project-management': FaProjectDiagram,
  'technical': FaCode,
  'design': FaPalette,
  'communication': FaComments,
  'leadership': FaUserTie,
}

const levelColors = {
  'beginner': 'bg-gray-200 text-gray-700',
  'intermediate': 'bg-blue-200 text-blue-700',
  'advanced': 'bg-purple-200 text-purple-700',
  'expert': 'bg-green-200 text-green-700',
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const Icon = categoryIcons[skill.category]

  return (
    <div className="card p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-full">
          <Icon className="text-3xl text-primary-600 dark:text-primary-400" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {skill.name}
      </h3>
    </div>
  )
}

export default SkillCard
