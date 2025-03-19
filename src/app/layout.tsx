import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Art of Paint and Floors',
  description: 'Professional painting and flooring services in Winter Garden, FL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-gray-900">
                Art of Paint and Floors
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="text-gray-600 hover:text-gray-900">
                  Services
                </a>
                <a href="#projects" className="text-gray-600 hover:text-gray-900">
                  Projects
                </a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
                  Testimonials
                </a>
                <a href="#blog" className="text-gray-600 hover:text-gray-900">
                  Blog
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Art of Paint and Floors</h3>
                <p className="text-gray-400">
                  Transforming spaces with quality and style in Winter Garden, FL.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#services" className="text-gray-400 hover:text-white">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-400 hover:text-white">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="text-gray-400 hover:text-white">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>123 Main St</li>
                  <li>Winter Garden, FL 34787</li>
                  <li>Phone: (689) 316-5502</li>
                  <li>Email: quotes@paintandfloors.com</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Art of Paint and Floors. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 