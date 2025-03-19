import { BusinessInfoProps } from '@/types/components';
import SocialLinks from './SocialLinks';

export default function BusinessInfo({ info, socialLinks }: BusinessInfoProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{info.name}</h2>
          <p className="text-gray-600 mb-4">{info.description}</p>
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="font-semibold mr-2">Address:</span>
              {info.address}
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">Phone:</span>
              {info.phone}
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">Email:</span>
              {info.email}
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">Hours:</span>
              {info.hours}
            </p>
          </div>
          <div className="mt-6">
            <SocialLinks links={socialLinks} />
          </div>
        </div>
      </div>
    </section>
  );
} 