import Link from 'next/link'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/fiona-sullivan-143619214', label: 'LinkedIn' },
    { icon: FaEnvelope, href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="py-12" style={{backgroundColor: '#f5f1ea'}}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{color: '#3c1617'}}>FFS Consulting</h3>
            <p style={{color: '#5e2f29'}}>
              Project Management consulting supporting organizations to build scalable, community-driven solutions. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{color: '#3c1617'}}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="transition-colors hover:opacity-70" style={{color: '#5e2f29'}}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition-colors hover:opacity-70" style={{color: '#5e2f29'}}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:opacity-70" style={{color: '#5e2f29'}}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:opacity-70" style={{color: '#5e2f29'}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{color: '#3c1617'}}>Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-2xl transition-colors hover:opacity-70"
                  style={{color: '#5e2f29'}}
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center" style={{borderTop: '1px solid #d4c4b0', color: '#5e2f29'}}>
          <p>&copy; {currentYear} Fiona F. Sullivan Consulting. All rights reserved.</p>
          <p className="text-sm mt-2">
            Website built by{' '}
            <a 
              href="https://tyler-schwenk.github.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity underline"
            >
              Tyler Schwenk
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
