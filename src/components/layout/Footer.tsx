import Link from 'next/link'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/fiona-sullivan-143619214', label: 'LinkedIn' },
    { icon: FaEnvelope, href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Fiona F. Sullivan Consulting</h3>
            <p className="text-gray-400">
              Humanitarian project management consulting building community-driven solutions at the 
              intersection of global relief work and international development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white text-2xl transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Fiona F. Sullivan Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
