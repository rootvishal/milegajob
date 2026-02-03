'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Star, ExternalLink, Filter, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';
import { jobPortals, getAllCategories } from '../../data/jobPortals';

export default function AllPortalsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'rating'>('rating');

  const categories = ['All', ...getAllCategories()];

  const filteredPortals = useMemo(() => {
    let filtered = jobPortals;

    if (activeFilter !== 'All') {
      filtered = filtered.filter(portal => portal.category === activeFilter);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(portal =>
        portal.name.toLowerCase().includes(query) ||
        portal.description.toLowerCase().includes(query) ||
        portal.specialization?.toLowerCase().includes(query)
      );
    }

    // Sort
    if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchQuery, activeFilter, sortBy]);

  const categoryStats = getAllCategories().map(cat => ({
    name: cat,
    count: jobPortals.filter(p => p.category === cat).length
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-amber-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />
          <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-700 font-semibold hover:text-orange-600 transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">100 Job Portals Directory</h2>
          <p className="text-xl text-blue-100 mb-6">
            Comprehensive database of all job portals across India and globally
          </p>
          <div className="inline-block px-6 py-2 bg-white/20 rounded-lg font-semibold">
            🎯 {jobPortals.length} Portals | 📊 {getAllCategories().length} Categories | ⭐ 4.5+ Avg Rating
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search portals by name, specialization, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none text-lg transition-all"
            />
          </div>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          {/* Category Filters */}
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-600 mb-3 flex items-center gap-2">
              <Filter size={16} />
              FILTER BY CATEGORY
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => {
                const count = cat === 'All' ? jobPortals.length : categoryStats.find(s => s.name === cat)?.count || 0;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeFilter === cat
                        ? 'bg-gradient-to-r from-blue-900 to-orange-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat === 'All' ? '🌐 All' : cat}
                    <span className="ml-2 text-xs opacity-75">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-end gap-2">
            <div>
              <p className="text-sm font-bold text-gray-600 mb-3">SORT BY</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'rating')}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none font-semibold"
              >
                <option value="rating">⭐ Highest Rated</option>
                <option value="name">🔤 Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <p className="text-gray-700 font-semibold text-lg">
            📌 Showing <span className="text-blue-600">{filteredPortals.length}</span> of <span className="text-purple-600">{jobPortals.length}</span> portals
            {activeFilter !== 'All' && ` in ${activeFilter}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Portals Grid */}
        {filteredPortals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredPortals.map(portal => (
              <div
                key={portal.id}
                className="group bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Top Section - Icon & Category */}
                <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-5 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-5xl">{portal.icon}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">
                      {portal.category === "Freshers & Entry-Level" && "🎓"}
                      {portal.category === "Remote & AI/Tech" && "💻"}
                      {portal.category === "Experienced & Corporate" && "👔"}
                      {portal.category === "Government & Schemes" && "🇮🇳"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{portal.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{portal.description}</p>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(portal.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-700">{portal.rating.toFixed(1)}</span>
                  </div>

                  {/* Specialization */}
                  {portal.specialization && (
                    <div className="mb-4 pb-4 border-b border-gray-100">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Specialization</p>
                      <p className="text-sm font-semibold text-purple-600">{portal.specialization}</p>
                    </div>
                  )}

                  {/* Built For */}
                  <div className="mb-5">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Built For</p>
                    <p className="text-sm text-gray-700 line-clamp-2">{portal.builtFor}</p>
                  </div>

                  {/* Visit Button */}
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-900 to-orange-600 hover:shadow-lg text-white font-bold rounded-lg transition-all duration-300 group/btn hover:scale-105"
                  >
                    <span>Visit Portal</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl mb-6">No portals found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('All');
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-900 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Clear Filters & Try Again
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 border-t border-gray-200">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">{jobPortals.length}</p>
            <p className="text-gray-600 font-semibold">Total Portals</p>
          </div>
          {categoryStats.map(stat => (
            <div key={stat.name} className="text-center">
              <p className="text-3xl font-bold text-purple-600">{stat.count}</p>
              <p className="text-gray-600 font-semibold text-sm">{stat.name.split(' & ')[0]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">MilegaJob</h4>
              <p className="text-gray-400">Comprehensive database of all job portals across India and globally</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Freshers & Entry-Level</li>
                <li>Remote & AI/Tech</li>
                <li>Experienced & Corporate</li>
                <li>Government & Schemes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/explore" className="hover:text-white">Explore</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">info@milegajob.com</p>
              <p className="text-gray-400 text-sm">Support 24/7</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 MilegaJob. All rights reserved. | Discover 100+ Job Portals</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
