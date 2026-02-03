'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, TrendingUp, Filter, Search, Eye, Edit, Trash2 } from 'lucide-react';
import Logo from '../../components/Logo';
import { contentCalendar, getContentStats } from '../../../data/contentCalendar';

export default function ContentCalendarPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');

  const stats = getContentStats();

  const filteredArticles = useMemo(() => {
    return contentCalendar.filter(article => {
      const matchesSearch = article.seoTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesMonth = selectedMonth === 'All' || article.postDate.includes(selectedMonth);
      return matchesSearch && matchesCategory && matchesMonth;
    });
  }, [searchQuery, selectedCategory, selectedMonth]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-amber-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />
          <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-700 font-semibold hover:text-blue-600 transition-colors">
              Dashboard
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              New Article
            </button>
          </div>
        </nav>
      </header>

      {/* Page Title */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Content Calendar</h1>
          </div>
          <p className="text-gray-600">
            MilegaJob 200: Automated SEO Article System (Batch 1/10: Articles 1-20)
          </p>
        </div>
      </section>

      {/* Statistics Cards */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-semibold">Total Articles (This Batch)</span>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">{stats.totalArticles}</p>
            <p className="text-sm text-gray-600 mt-2">of 200 planned</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-semibold">AI Jobs</span>
            </div>
            <p className="text-3xl font-bold text-green-600">{stats.aiJobs.count}</p>
            <p className="text-sm text-gray-600 mt-2">{stats.aiJobs.percentage}% of articles</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-semibold">Remote Jobs</span>
            </div>
            <p className="text-3xl font-bold text-purple-600">{stats.remoteJobs.count}</p>
            <p className="text-sm text-gray-600 mt-2">{stats.remoteJobs.percentage}% of articles</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-semibold">Job Search Strategy</span>
            </div>
            <p className="text-3xl font-bold text-orange-600">{stats.jobSearchStrategy.count}</p>
            <p className="text-sm text-gray-600 mt-2">{stats.jobSearchStrategy.percentage}% of articles</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Search Articles</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="By title or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Categories</option>
                <option value="AI Jobs">AI Jobs (40%)</option>
                <option value="Remote Jobs">Remote Jobs (40%)</option>
                <option value="Job Search Strategy">Job Search Strategy (20%)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Month</label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Months</option>
                <option value="2025-01">January 2025</option>
                <option value="2025-02">February 2025</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600 font-semibold">
            Showing {filteredArticles.length} of {contentCalendar.length} articles
          </p>
        </div>

        {/* Articles Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">Post Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">SEO Title</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">Primary Keyword</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredArticles.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900 font-semibold">#{article.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{article.postDate}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="font-semibold text-gray-900 max-w-xs truncate">{article.seoTitle}</div>
                      <div className="text-xs text-gray-500 mt-1">{article.metaDescription.substring(0, 50)}...</div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {article.primaryKeyword.substring(0, 30)}...
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        article.category === 'AI Jobs' ? 'bg-green-100 text-green-700' :
                        article.category === 'Remote Jobs' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {article.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View">
                          <Eye size={16} className="text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Edit">
                          <Edit size={16} className="text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Delete">
                          <Trash2 size={16} className="text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mt-8">
          <h3 className="font-bold text-gray-900 mb-3">📋 Next Steps for Full Implementation</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✅ <strong>Batch 1 Complete:</strong> 20 articles with SEO structure ready for approval</li>
            <li>⏳ <strong>Batch 2-10 Pending:</strong> 180 remaining articles following identical structure</li>
            <li>🔄 <strong>Distribution:</strong> 4 articles/week across Jan 2025 - Jan 2026</li>
            <li>🎯 <strong>Keyword Strategy:</strong> No cannibalization, unique LSI keywords per article</li>
            <li>📝 <strong>Full Articles:</strong> Ready to generate on approval (1,500+ words each with examples)</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 MilegaJob Content Management System. SEO-Optimized 200-Article Strategy.
          </p>
        </div>
      </footer>
    </div>
  );
}
