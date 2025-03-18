import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import React from 'react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2000&auto=format&fit=crop"
            alt="Professional painting and flooring services"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Elevate Your Home with Expert Painting and Flooring Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover transformative services in Winter Garden, FL today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 bg-white text-[#1a365d] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Transform Your Home
              </a>
              <a href="#services" className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1a365d] font-semibold">Crafted Excellence</span>
            <h2 className="text-4xl font-bold mt-2">Quality Painting & Flooring Solutions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="w-full h-48 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1562259934-1e4b8bcd1c34?q=80&w=800&auto=format&fit=crop"
                    alt="Residential Painting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#1a365d]">Residential Painting Excellence</h3>
                <p className="text-gray-600">
                  Transform your home with our expert interior and exterior painting services, tailored to your style.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="w-full h-48 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop"
                    alt="Premium Flooring"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#1a365d]">Premium Flooring Solutions</h3>
                <p className="text-gray-600">
                  Upgrade any room with our quality flooring options, including hardwood, laminate, and vinyl.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="w-full h-48 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
                    alt="Color Consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#1a365d]">Custom Color Consultations</h3>
                <p className="text-gray-600">
                  Personalized color consultations to ensure your space reflects your unique taste and vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
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
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a365d]">Get Your Free Quote Today</h2>
              <p className="text-xl text-gray-600 mt-4">
                Ready to transform your space? Contact us for a consultation and free quote.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
} 