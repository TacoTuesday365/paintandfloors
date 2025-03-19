import { ServiceCardProps } from '@/types/components';

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
} 