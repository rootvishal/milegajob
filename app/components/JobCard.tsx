'use client';

import { Star, ExternalLink } from 'lucide-react';

interface JobCardProps {
  id: number;
  name: string;
  category: string;
  url: string;
  description: string;
  rating?: number;
  reviews?: number;
}

export default function JobCard({ id, name, category, url, description, rating = 4.5, reviews = 128 }: JobCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Freshers':
        return 'bg-blue-100 text-blue-900';
      case 'Experienced':
        return 'bg-orange-100 text-orange-700';
      case 'Internships':
        return 'bg-green-100 text-green-700';
      case 'Government':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPortalLogo = (name: string) => {
    const logos: { [key: string]: string } = {
      'Internshala': '🎓',
      'Naukri.com': '💼',
      'Freshersworld': '🌟',
      'LinkedIn Jobs': '🔗',
      'Indeed India': '🔍',
      'National Career Service (NCS)': '🏛️',
      'Unstop': '🚀',
      'foundit (Monster)': '👹',
      'Startup India Hub': '⚡',
      'Shine.com': '✨',
      'Cutshort': '✂️',
      'Free Job Alert': '📢'
    };
    return logos[name] || '💼';
  };

  return (
    <div className="group relative h-full">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
        <div className="absolute inset-[2px] bg-white rounded-[10px]"></div>
      </div>

      {/* Card content */}
      <div className="relative h-full bg-white rounded-xl p-6 border border-gray-200 group-hover:border-transparent transition-all duration-300 shadow-md group-hover:shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="text-4xl">{getPortalLogo(name)}</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{name}</h3>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mt-1 ${getCategoryColor(category)}`}>
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700">{rating}</span>
          <span className="text-xs text-gray-500">({reviews} reviews)</span>
        </div>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3">{description}</p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full text-center bg-gradient-to-r from-blue-900 to-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg hover:from-blue-950 hover:to-orange-700 transition-all duration-300 transform group-hover:scale-105 gap-2"
        >
          Visit Portal <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
