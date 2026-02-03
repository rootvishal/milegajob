'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, User, LogOut } from 'lucide-react';
import Logo from './components/Logo';
import { useAuth } from '../hooks/useAuth';

function SignOutButton() {
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
import JobCard from './components/JobCard';
import FilterButtons from './components/FilterButtons';
import AboutSection from './components/AboutSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import BlogSection from './components/BlogSection';
import jobsData from '../jobData.json';

export default function Home() {
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Freshers', 'Experienced', 'Internships', 'Government'];

  const filteredJobs = (activeFilter === 'All' 
    ? jobsData 
    : jobsData.filter(job => job.category === activeFilter)
  ).filter(job => 
    (job.name?.toLowerCase().includes(searchQuery.toLowerCase()) || false) ||
    (job.description?.toLowerCase().includes(searchQuery.toLowerCase()) || false)
  ).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-amber-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden" style={{backgroundImage: "url('/baground.png')"}}>
        <div className="absolute inset-0 bg-white/0"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Gateway to{' '}
              <span className="bg-gradient-to-r from-blue-900 to-orange-600 bg-clip-text text-transparent">
                Perfect Job Opportunities
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Discover and explore India's leading job portals all in one place. Find roles tailored to your career stage, all curated for you.
            </p>

            {/* Hero CTA Button with Search */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/explore"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-900 to-orange-600 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 text-lg transform hover:scale-105"
              >
                <Search size={20} />
                Search & Explore Jobs
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div>
            {/* Background image shows girl on right */}
          </div>
        </div>
      </section>

      {/* Featured Portals Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mt-0">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Featured Job Portals</h3>
            <Link href="/explore" className="text-blue-900 font-semibold hover:gap-2 transition-all flex items-center gap-1 hover:text-orange-600">
              View All <ArrowRight size={18} />
            </Link>
          </div>

          {/* Filter System */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1">
              <FilterButtons 
                categories={categories} 
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                placeholder="Search job portals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-11 text-black border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <Search size={20} className="absolute left-3 top-3.5 text-gray-400" />
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map(job => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* What We Do Section */}
      <div id="features">
        <WhatWeDoSection />
      </div>

      {/* Blog Section */}
      <div id="blog">
        <BlogSection />
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Next Opportunity?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Explore all job portals, filter by your preferences, and save your favorites for quick access.
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:shadow-lg transition-all text-lg"
          >
            Start Exploring <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/">
                <Logo />
              </Link>
              <p className="text-gray-400 mt-4">Your one-stop solution for job seeking.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 MilegaJob. All rights reserved. Your one-stop solution for job seeking.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
