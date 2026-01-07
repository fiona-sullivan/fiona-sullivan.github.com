import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Fiona F. Sullivan Consulting',
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

        {/* Contact Information Card */}
        <div className="card p-12 text-center">

          {/* Contact Methods - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Email */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-full">
                <FaEnvelope className="text-3xl text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Email</h3>
                <a
                  href="mailto:fiona.sullivan716@gmail.com"
                  className="text-lg text-primary-600 hover:text-primary-700 transition-colors font-medium"
                >
                  fiona.sullivan716@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-full">
                <FaMapMarkerAlt className="text-3xl text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Location</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Washington, DC
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
                <FaLinkedin className="text-3xl text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/fiona-sullivan-143619214"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Availability Note */}
          <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 italic">
              Available for consulting in humanitarian project management. 
              I typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
