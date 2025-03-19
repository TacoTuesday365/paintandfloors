import { Project, BlogPost, SocialLink, BusinessInfo, Service, Testimonial } from '@/types/components';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Kitchen Renovation',
    description: 'Complete kitchen transformation with custom cabinets and hardwood flooring.',
    image: '/images/projects/kitchen.jpg',
    category: 'Kitchen'
  },
  {
    id: '2',
    title: 'Living Room Makeover',
    description: 'Contemporary living room with fresh paint and new flooring.',
    image: '/images/projects/living-room.jpg',
    category: 'Living Room'
  },
  {
    id: '3',
    title: 'Bathroom Remodel',
    description: 'Elegant bathroom renovation with custom tile work.',
    image: '/images/projects/bathroom.jpg',
    category: 'Bathroom'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Choosing the Right Paint Colors',
    excerpt: 'Learn how to select the perfect paint colors for your home.',
    content: 'Full article content here...',
    date: '2024-03-15',
    author: 'John Smith',
    image: '/images/blog/paint-colors.jpg'
  },
  {
    id: '2',
    title: 'Hardwood vs. Laminate Flooring',
    excerpt: 'Compare the pros and cons of different flooring options.',
    content: 'Full article content here...',
    date: '2024-03-10',
    author: 'Jane Doe',
    image: '/images/blog/flooring-comparison.jpg'
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com/artofpaintandfloors',
    icon: '📘'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/artofpaintandfloors',
    icon: '📸'
  },
  {
    platform: 'Pinterest',
    url: 'https://pinterest.com/artofpaintandfloors',
    icon: '📌'
  },
  {
    platform: 'Houzz',
    url: 'https://houzz.com/artofpaintandfloors',
    icon: '🏠'
  }
];

export const businessInfo: BusinessInfo = {
  name: 'Art of Paint and Floors',
  description: 'Professional painting and flooring services in Winter Garden, FL',
  address: '123 Main St, Winter Garden, FL 34787',
  phone: '(689) 316-5502',
  email: 'quotes@paintandfloors.com',
  hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM, Sun: Closed'
};

export const services: Service[] = [
  {
    title: 'Interior Painting',
    description: 'Professional interior painting services with premium materials.',
    icon: '🎨'
  },
  {
    title: 'Exterior Painting',
    description: 'Durable exterior painting solutions for your home.',
    icon: '🏠'
  },
  {
    title: 'Hardwood Flooring',
    description: 'Installation and refinishing of hardwood floors.',
    icon: '🪑'
  },
  {
    title: 'Tile Installation',
    description: 'Custom tile work for bathrooms and kitchens.',
    icon: '🧱'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The team at Art of Paint and Floors did an amazing job with our kitchen renovation. Their attention to detail and professionalism was outstanding.',
    image: '/images/testimonials/sarah.jpg'
  },
  {
    id: '2',
    name: 'Michael Brown',
    role: 'Property Manager',
    content: 'We\'ve used their services for multiple properties. They\'re reliable, efficient, and deliver excellent results every time.',
    image: '/images/testimonials/michael.jpg'
  }
]; 