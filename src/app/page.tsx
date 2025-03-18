import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Spaces with Professional Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Elevate your home with expert painting and flooring solutions. Discover transformative services in Winter Garden, FL today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Transform Your Home
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">Crafted Excellence</span>
            <h2 className="text-4xl font-bold mt-2">Quality Painting & Flooring Solutions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Residential Painting Excellence</h3>
              <p className="text-gray-600">
                Transform your home with our expert interior and exterior painting services, tailored to your style.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="3" y1="15" x2="21" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Premium Flooring Solutions</h3>
              <p className="text-gray-600">
                Upgrade any room with our quality flooring options, including hardwood, laminate, and vinyl.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Custom Color Consultations</h3>
              <p className="text-gray-600">
                Personalized color consultations to ensure your space reflects your unique taste and vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories from Local Homeowners</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6">
                "Art of Painting and Floors transformed our home with vibrant colors and flawless flooring. Their team was professional, timely, and detail-oriented."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-bold">Jessica Thompson</p>
                  <p className="text-sm text-gray-500">Winter Garden, FL</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6">
                "Exceeded our expectations with their exceptional service. The team's expertise in home painting and flooring is unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-bold">Michael Chen</p>
                  <p className="text-sm text-gray-500">Winter Garden, FL</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6">
                "Their attention to detail in both painting and flooring was remarkable. The team was friendly and worked efficiently."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-bold">Emily Parker</p>
                  <p className="text-sm text-gray-500">Winter Garden, FL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Contact Us for Expert Help</h2>
            <p className="text-xl mb-12">
              Reach out to discuss your Winter Garden painting and flooring needs.
            </p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
              ></textarea>
              <button type="submit" className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get a Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
} 