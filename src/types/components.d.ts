export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface BusinessInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ProjectCardProps {
  project: Project;
  key?: string;
}

export interface BlogCardProps {
  post: BlogPost;
  key?: string;
}

export interface ServiceCardProps {
  service: Service;
  key?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  key?: string;
}

export interface BusinessInfoProps {
  info: BusinessInfo;
  socialLinks: SocialLink[];
}

export interface SocialLinksProps {
  links: SocialLink[];
} 