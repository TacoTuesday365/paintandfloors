import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#1a365d] font-semibold">About Us</span>
          <h2 className="text-4xl font-bold mt-2">Our Story</h2>
          <p className="text-xl text-gray-600 mt-4">
            Serving Winter Garden, FL with excellence since 2010
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Company History */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Our History</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2010, Art of Paint and Floors has been at the forefront of residential painting and flooring services in Winter Garden, FL. What started as a small family business has grown into a trusted name in home improvement.
              </p>
              <p>
                Our journey began with a simple mission: to provide exceptional service and quality workmanship to our local community. Over the years, we've expanded our expertise and services while maintaining our commitment to customer satisfaction.
              </p>
              <p>
                Today, we're proud to serve homeowners throughout Winter Garden and surrounding areas, helping them transform their spaces into beautiful, comfortable homes.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Our Mission</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                At Art of Paint and Floors, our mission is to enhance the beauty and value of our clients' homes through exceptional painting and flooring services. We believe in:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Delivering superior quality workmanship</li>
                <li>Providing personalized service to each client</li>
                <li>Using premium materials and products</li>
                <li>Maintaining the highest standards of professionalism</li>
                <li>Supporting our local community</li>
              </ul>
              <p>
                We're committed to making your home improvement dreams a reality while ensuring a smooth, stress-free experience from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 