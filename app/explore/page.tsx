'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Star, Filter, ExternalLink, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { useFavorites } from '../../hooks/useFavorites';
import { jobPortals, getAllCategories } from '../../data/jobPortals';

function ExploreSignOutButton() {
  const { logout } = useAuth();
  const router = useRouter();
  const handleSignOut = async () => {
    await logout();
    router.push('/');
  };
  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="hidden sm:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 font-semibold transition-colors"
    >
      <LogOut className="h-4 w-4" /> Sign out
    </button>
  );
}

export default function ExplorePage() {
  const { user } = useAuth();
  const { favorites, isFavorited, addFavorite, removeFavorite } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...getAllCategories()];

  const favoritePortalIds = useMemo(() => new Set(favorites.map((f) => f.portal_id)), [favorites]);

  const filteredJobs = useMemo(() => {
    let filtered = jobPortals;

    if (activeFilter !== 'All') {
      filtered = filtered.filter(portal => portal.category === activeFilter);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(portal =>
        portal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        portal.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        portal.specialization?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (user && favoritePortalIds.size > 0) {
      filtered = [...filtered].sort((a, b) => {
        const aFav = favoritePortalIds.has(a.id);
        const bFav = favoritePortalIds.has(b.id);
        if (aFav && !bFav) return -1;
        if (!aFav && bFav) return 1;
        return 0;
      });
    }

    return filtered;
  }, [searchQuery, activeFilter, user, favoritePortalIds]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-amber-50">
      {/* Search Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-16" style={{backgroundImage: "url('/baground2.png')"}}>
        <div className="absolute inset-0 bg-blue-900/35"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-8 text-white" style={{fontFamily: 'Arial, sans-serif', letterSpacing: '0.5px'}}>Find Your Next Opportunity</h2>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search job portals by name or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-900 shadow-lg font-semibold"
              style={{fontFamily: 'Arial, sans-serif'}}
            />
          </div>

          {/* Filter Section */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-white font-bold text-lg" style={{fontFamily: 'Arial, sans-serif', letterSpacing: '0.3px'}}>
              <Filter size={20} />
              <span>Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('All')}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 ${
                  activeFilter === 'All'
                    ? 'bg-white text-blue-900 shadow-lg'
                    : 'bg-white/25 text-white hover:bg-white/40 border border-white/30'
                }`}
                style={{fontFamily: 'Arial, sans-serif'}}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 ${
                    activeFilter === category
                      ? 'bg-white text-blue-900 shadow-lg'
                      : 'bg-white/25 text-white hover:bg-white/40 border border-white/30'
                  }`}
                  style={{fontFamily: 'Arial, sans-serif'}}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-6">
          <p className="text-gray-700 font-semibold text-lg" style={{fontFamily: 'Arial, sans-serif', letterSpacing: '0.3px'}}>
            Found {filteredJobs.length} job portal{filteredJobs.length !== 1 ? 's' : ''}
            {activeFilter !== 'All' && ` in ${activeFilter}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Job Cards Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredJobs.map(portal => (
              <div
                key={portal.id}
                className="bg-white rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header with Icon and Category Badge */}
                <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-6 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    {portal.logo ? (
                      <img
                        src={portal.logo}
                        alt={`${portal.name} logo`}
                        className="w-16 h-16 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div className={`text-5xl ${portal.logo ? 'hidden' : ''}`}>{portal.icon}</div>
                    <div className="flex items-center gap-2">
                      {user && (
                        <button
                          type="button"
                          onClick={() => (isFavorited(portal.id) ? removeFavorite(portal.id) : addFavorite(portal.id))}
                          className="p-1.5 rounded-full hover:bg-white/60 transition-colors"
                          aria-label={isFavorited(portal.id) ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          <Star
                            size={20}
                            className={isFavorited(portal.id) ? 'fill-amber-500 text-amber-500' : 'text-gray-400'}
                          />
                        </button>
                      )}
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                        {portal.category.split(' & ')[0]}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{portal.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{portal.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(portal.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{portal.rating.toFixed(1)}</span>
                  </div>

                  {/* Specialization Badge */}
                  {portal.specialization && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-600 font-semibold mb-1">SPECIALIZATION:</p>
                      <p className="text-sm text-orange-600 font-semibold">{portal.specialization}</p>
                    </div>
                  )}

                  {/* Built For */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-gray-600 font-semibold mb-1">BUILT FOR:</p>
                    <p className="text-sm text-gray-700">{portal.builtFor}</p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-900 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <span>Visit Portal</span>
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl mb-4">No job portals found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('All');
              }}
              className="px-6 py-2 bg-gradient-to-r from-blue-900 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 MilegaJob. Your one-stop solution for job seeking.
          </p>
        </div>
      </footer>
    </div>
  );
}
