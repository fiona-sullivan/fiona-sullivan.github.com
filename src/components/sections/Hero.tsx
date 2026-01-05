import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">Fiona Sullivan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
            Humanitarian Project Manager
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Building a career at the intersection of global relief work and project management, 
            delivering community-driven solutions with cultural sensitivity and strong coordination 
            in humanitarian and international development contexts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
              View My Projects
              <FaArrowRight />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">Countries Worked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Coordinated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Community Focused</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
