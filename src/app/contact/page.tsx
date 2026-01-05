import ContactForm from '@/components/ui/ContactForm'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Fiona Sullivan',
  description: 'Get in touch to discuss humanitarian projects, international development opportunities, or collaboration.',
}

export default function ContactPage() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Interested in collaboration on humanitarian or international development projects? Let's connect.
          </p>
        </div>

        {/* Contact Form */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Send Me a Message
          </h2>
          <ContactForm />
        </div>

        {/* Contact Information - Simplified */}
        <div className="text-center space-y-6">
          <div>
            <div className="flex justify-center items-center gap-3 mb-2">
              <FaEnvelope className="text-2xl text-primary-600 dark:text-primary-400" />
              <a
                href="mailto:fiona.sullivan@example.com"
                className="text-lg text-primary-600 hover:text-primary-700 transition-colors"
              >
                fiona.sullivan@example.com
              </a>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-2xl text-primary-600 dark:text-primary-400" />
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Washington, District of Columbia
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Connect with me:</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-blue-600 hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Availability Note */}
          <div className="pt-6">
            <p className="text-gray-600 dark:text-gray-400 italic">
              Available for consulting opportunities in humanitarian project management. 
              I typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
