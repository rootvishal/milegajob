'use client';

import { useState } from 'react';
import { ExternalLink, Star, Zap } from 'lucide-react';
import { jobPortals, getPortalsByCategory } from '../../data/jobPortals';

interface CategoryShowcaseProps {
  category: "Freshers & Entry-Level" | "Remote & AI/Tech" | "Experienced & Corporate" | "Government & Schemes";
  limit?: number;
}

export default function CategoryShowcase({ category, limit = 6 }: CategoryShowcaseProps) {
  const [showAll, setShowAll] = useState(false);
  const portals = getPortalsByCategory(category);
  const displayed = showAll ? portals : portals.slice(0, limit);

  const categoryEmoji: Record<string, string> = {
    "Freshers & Entry-Level": "🎓",
    "Remote & AI/Tech": "💻",
    "Experienced & Corporate": "👔",
    "Government & Schemes": "🇮🇳"
  };

  const categoryColor: Record<string, string> = {
    "Freshers & Entry-Level": "from-emerald-600 to-teal-600",
    "Remote & AI/Tech": "from-blue-600 to-indigo-600",
    "Experienced & Corporate": "from-purple-600 to-pink-600",
    "Government & Schemes": "from-orange-600 to-red-600"
  };

  return (
    <div className="mb-16">
      {/* Category Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{categoryEmoji[category]}</span>
          <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
          <span className="ml-auto px-4 py-2 bg-gray-100 text-gray-700 font-bold rounded-full">
            {portals.length} Portals
          </span>
        </div>
        <p className="text-gray-600 text-lg">
          {category === "Freshers & Entry-Level" && "Perfect for students and fresh graduates entering the job market"}
          {category === "Remote & AI/Tech" && "Leading platforms for remote, AI, and technology professionals"}
          {category === "Experienced & Corporate" && "Premium portals for mid-level and senior professionals"}
          {category === "Government & Schemes" && "Official government job portals and official schemes"}
        </p>
      </div>

      {/* Portal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {displayed.map(portal => (
          <div
            key={portal.id}
            className="group bg-white rounded-lg border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Portal Header */}
            <div className={`bg-gradient-to-r ${categoryColor[category]} p-4 text-white`}>
              <div className="flex items-start justify-between mb-2">
                <div className="text-4xl">{portal.icon}</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(portal.rating) ? 'fill-yellow-300 text-yellow-300' : 'text-white/30'}
                    />
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-lg group-hover:translate-x-1 transition-transform">{portal.name}</h3>
              <p className="text-white/80 text-sm line-clamp-2">{portal.description}</p>
            </div>

            {/* Portal Content */}
            <div className="p-4">
              {/* Specialization */}
              {portal.specialization && (
                <div className="mb-3">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Focus</p>
                  <p className="text-sm font-semibold text-gray-700">{portal.specialization}</p>
                </div>
              )}

              {/* Built For */}
              <div className="mb-4 pb-4 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">For</p>
                <p className="text-sm text-gray-600 line-clamp-2">{portal.builtFor}</p>
              </div>

              {/* Visit Button */}
              <a
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-3 py-2 bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white font-semibold rounded-lg transition-all duration-300 group/btn"
              >
                <span>Visit</span>
                <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {portals.length > limit && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-900 font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            {showAll ? '✓ Show Less' : `➕ Show All ${portals.length} Portals`}
          </button>
        </div>
      )}
    </div>
  );
}
