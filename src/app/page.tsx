import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import ProjectShowcase from '@/components/ProjectShowcase'
import BusinessInfo from '@/components/BusinessInfo'
import BlogSection from '@/components/BlogSection'
import AboutSection from '@/components/AboutSection'
import React from 'react'
import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'
import TestimonialCard from '@/components/TestimonialCard'
import ServiceCard from '@/components/ServiceCard'
import SocialLinks from '@/components/SocialLinks'
import {
  projects,
  blogPosts,
  testimonials,
  services,
  businessInfo,
  socialLinks
} from '@/data/mockData'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Art of Paint and Floors</h1>
          <p className="text-xl mb-8">Transforming spaces with quality and style</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get a Quote
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <p className="text-center mb-8">Transparent pricing, eco-friendly materials, and a 100% satisfaction guarantee.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Info Section */}
      <BusinessInfo info={businessInfo} socialLinks={socialLinks} />
    </main>
  )
} 