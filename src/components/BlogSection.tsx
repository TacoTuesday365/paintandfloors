import Image from 'next/image'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  category: 'painting' | 'flooring' | 'tips'
  date: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Top 10 Paint Colors for 2024',
    excerpt: 'Discover the trending paint colors that will transform your home this year.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop',
    category: 'painting',
    date: 'March 15, 2024'
  },
  {
    id: 2,
    title: 'Hardwood vs. Laminate: Making the Right Choice',
    excerpt: 'A comprehensive guide to help you choose between hardwood and laminate flooring.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop',
    category: 'flooring',
    date: 'March 10, 2024'
  },
  {
    id: 3,
    title: 'DIY vs. Professional Painting: What You Need to Know',
    excerpt: 'Learn when to tackle painting projects yourself and when to call in the experts.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
    category: 'tips',
    date: 'March 5, 2024'
  }
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#1a365d] font-semibold">Resources</span>
          <h2 className="text-4xl font-bold mt-2">Home Improvement Tips & Trends</h2>
          <p className="text-xl text-gray-600 mt-4">
            Stay informed with our latest articles and expert advice
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#1a365d] capitalize">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-[#1a365d] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 