import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-primary-600 dark:text-primary-400">Fiona F. Sullivan</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Consulting
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
            Project Management Consultant
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            I help organizations turn complex initiatives into clear, actionable outcomes. 
            I'm especially passionate about supporting humanitarian and social impact organizations—bringing 
            structure, clarity, and accountability to projects that create meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
            <Link href="/projects" className="btn-secondary inline-flex items-center gap-2">
              View My Projects
              <FaArrowRight />
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
