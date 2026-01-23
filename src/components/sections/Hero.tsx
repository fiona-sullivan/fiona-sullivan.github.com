import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="py-20 md:py-32" style={{backgroundImage: 'url(/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary-600 dark:border-primary-400 shadow-lg">
              <Image
                src="/headshot.png"
                alt="Fiona F. Sullivan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{color: '#3c1617', textShadow: '0 2px 4px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(255, 255, 255, 0.3)'}}>
            <span style={{color: '#3c1617', textShadow: '0 2px 4px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(255, 255, 255, 0.3)'}}>Fiona F. Sullivan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{color: '#3c1617', textShadow: '0 1px 3px rgba(255, 255, 255, 0.4)'}}>
            Project Management Consultant
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto px-4 py-2 rounded-lg" style={{color: '#5e2f29', backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(4px)'}}>
            I help organizations turn complex initiatives into clear, actionable outcomes. 
            I'm especially passionate about supporting humanitarian and social impact organizations—bringing 
            structure, clarity, and accountability to projects that create meaningful change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
