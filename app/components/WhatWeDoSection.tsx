import { Target, TrendingUp, Users, Briefcase } from 'lucide-react';

export default function WhatWeDoSection() {
  const features = [
    {
      icon: Target,
      title: 'Curated Portal Collection',
      description: 'We handpick and organize the best job portals across multiple categories so you don\'t have to search aimlessly.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Ratings',
      description: 'Get authentic ratings and reviews from thousands of job seekers to make informed decisions about each platform.'
    },
    {
      icon: Users,
      title: 'Your Favorites',
      description: 'Save your favorite job portals and access them anytime with our intuitive bookmarking system.'
    },
    {
      icon: Briefcase,
      title: 'Category-based Filtering',
      description: 'Explore opportunities tailored to your career stage - Freshers, Experienced, Internships, or Government jobs.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We simplify your job search journey by providing everything you need in one powerful platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: '200+', label: 'Job Portals' },
            { number: '50K+', label: 'Active Users' },
            { number: '4.8', label: 'Avg Rating' },
            { number: '24/7', label: 'Support' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-900 to-orange-600 rounded-xl p-8 text-white text-center shadow-lg">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-orange-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
