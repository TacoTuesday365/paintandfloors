import Image from 'next/image'

interface Project {
  id: number
  title: string
  beforeImage: string
  afterImage: string
  category: 'painting' | 'flooring'
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Kitchen Transformation',
    beforeImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop',
    category: 'painting'
  },
  {
    id: 2,
    title: 'Luxury Master Bedroom',
    beforeImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
    category: 'flooring'
  },
  {
    id: 3,
    title: 'Contemporary Living Room',
    beforeImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
    category: 'painting'
  }
]

export default function ProjectShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#1a365d] font-semibold">Our Work</span>
          <h2 className="text-4xl font-bold mt-2">Transformation Gallery</h2>
          <p className="text-xl text-gray-600 mt-4">
            See how we've transformed homes in Winter Garden, FL
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px]">
                <Image
                  src={project.beforeImage}
                  alt={`${project.title} - Before`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm capitalize">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 