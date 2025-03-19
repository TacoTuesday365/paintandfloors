import { SocialLinksProps } from '@/types/components';

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <span className="text-2xl">{link.icon}</span>
        </a>
      ))}
    </div>
  );
} 