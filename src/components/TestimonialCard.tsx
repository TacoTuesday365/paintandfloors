import Image from 'next/image';
import { TestimonialCardProps } from '@/types/components';

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic">
        "{testimonial.content}"
      </blockquote>
    </div>
  );
} 