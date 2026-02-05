'use client';

import { useMemo } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import Script from 'next/script';

interface JobCardProps {
  id: number;
  name: string;
  category: string;
  url: string;
  description: string;
  rating?: number;
  reviews?: number;
  logo?: string;
}

export default function JobCard({ id, name, category, url, description, rating = 4.5, reviews, logo }: JobCardProps) {
  // Generate random reviews if not provided and calculate dates using useMemo to avoid impure function calls
  const { randomReviews, currentDate, validThroughDate } = useMemo(() => {
    const now = new Date();
    // Generate pseudo-random number based on id for consistency
    const pseudoRandom = (id * 9301 + 49297) % 233280 / 233280;
    return {
      randomReviews: reviews || Math.floor(pseudoRandom * 450) + 50,
      currentDate: now.toISOString().split('T')[0],
      validThroughDate: new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };
  }, [reviews, id]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Freshers':
        return 'bg-blue-500';
      case 'Experienced':
        return 'bg-orange-500';
      case 'Internships':
        return 'bg-green-500';
      case 'Government':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
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
      <div className="relative h-full animated-gradient-bg rounded-xl p-6 border border-transparent transition-all duration-300 shadow-md group-hover:shadow-2xl group-hover:scale-105 transform">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3 flex-1">
            {logo ? (
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`text-4xl ${logo ? 'hidden' : ''}`}>{getPortalLogo(name)}</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white line-clamp-2">{name}</h3>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mt-1 text-white ${getCategoryColor(category)}`}>
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
                className={`${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-white text-opacity-50'}`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-white">{rating}</span>
          <span className="text-xs text-white text-opacity-80">({randomReviews} reviews)</span>
        </div>

        <p className="text-white text-opacity-90 text-sm mb-6 line-clamp-3">{description}</p>

        <button
          onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
          className="bg-white text-black font-semibold py-3 px-6 rounded-lg w-full inline-flex items-center justify-center gap-2 mt-4 hover:bg-gray-100 hover:shadow-2xl hover:scale-110 transition-all duration-300 transform"
        >
          Visit Portal <ExternalLink size={16} />
        </button>

        {/* Structured Data for SEO and GEO */}
        <Script
          id={`job-portal-${id}-structured-data`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": name,
              "description": description,
              "hiringOrganization": {
                "@type": "Organization",
                "name": name,
                "url": url,
                "logo": `https://milegajob.com/logo1.png`
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "IN",
                  "addressRegion": "India"
                }
              },
              "employmentType": category === 'Internships' ? 'INTERN' : category === 'Freshers' ? 'ENTRY_LEVEL' : 'FULL_TIME',
              "industry": "Job Search",
              "datePosted": currentDate,
              "validThrough": validThroughDate,
              "jobLocationType": category === 'Remote & AI/Tech' ? 'TELECOMMUTE' : 'ONSITE',
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "INR",
                "value": {
                  "@type": "QuantitativeValue",
                  "minValue": category === 'Freshers' ? 15000 : category === 'Experienced' ? 50000 : 10000,
                  "maxValue": category === 'Freshers' ? 50000 : category === 'Experienced' ? 200000 : 30000,
                  "unitText": "MONTH"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": rating,
                "reviewCount": randomReviews,
                "bestRating": 5,
                "worstRating": 1
              },
              "applicationContact": {
                "@type": "ContactPoint",
                "url": url,
                "contactType": "technical support"
              }
            })
          }}
        />
      </div>
    </div>
  );
}
