import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Create Impact Together
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Interested in collaborating on humanitarian or international development projects? 
          I'd love to discuss how we can build community-driven solutions together.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Get In Touch
          <FaArrowRight />
        </Link>
      </div>
    </section>
  )
}

export default CallToAction
