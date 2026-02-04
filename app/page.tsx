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
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
              Your Gateway to{' '}
              <span className="animated-gradient-text">
                Perfect Job Opportunities
              </span>
            </h2>
            <p className="text-lg md:text-xl font-normal text-gray-600 mb-10 max-w-lg leading-relaxed">
              Discover and explore India's leading job portals all in one place. Find roles tailored to your career stage, all curated for you.
            </p>

            {/* Hero CTA Button with Search */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/explore"
                className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
              >
                <Search size={20} />
                Search & Explore Jobs
                <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-16 shadow-medium" style={{backgroundImage: 'url(/logo3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'multiply', minHeight: '400px'}}>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portals Preview */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="mt-0">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-5xl font-bold text-gray-900 uppercase text-sm font-bold tracking-wider">Featured Job Portals</h3>
            <Link href="/explore" className="text-primary font-semibold hover:gap-2 transition-all flex items-center gap-1 hover:text-primary-hover">
              View All <ArrowRight size={18} />
            </Link>
          </div>

          {/* Filter System */}
          <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
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
                className="w-full px-4 py-3 pl-11 text-black border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search size={20} className="absolute left-3 top-3.5 text-gray-400" />
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Find Your Next Opportunity?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore all job portals, filter by your preferences, and save your favorites for quick access.
          </p>
          <Link
            href="/explore"
            className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Start Exploring <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/">
                <Logo />
              </Link>
              <p className="text-gray-600 mt-6 leading-relaxed">Your one-stop solution for job seeking.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Quick Links</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#about" className="hover:text-primary transition-colors duration-300">About Us</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors duration-300">Features</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Resources</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="/faq" className="hover:text-primary transition-colors duration-300">FAQ</Link></li>
                <li><Link href="/support" className="hover:text-primary transition-colors duration-300">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Legal</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="/privacy-policy" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-primary transition-colors duration-300">Terms of Service</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-10 text-center text-gray-500">
            <p>© 2026 MilegaJob. All rights reserved. Your one-stop solution for job seeking.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
