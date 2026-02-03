import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '../../data/blogs';

export default function BlogSection() {
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Latest Insights & Articles</h2>
            <p className="text-gray-600">Stay updated with job market trends and career advice</p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
            View All Articles <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredBlogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group cursor-pointer">
              {/* Blog Header with Icon */}
              <div className="bg-gradient-to-r from-blue-900 to-orange-600 p-6 flex items-center justify-between">
                <span className="text-4xl">{blog.icon}</span>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={14} />
                    {blog.date}
                  </span>
                  <button className="text-blue-900 font-semibold text-sm hover:gap-2 transition-all flex items-center gap-1 group-hover:gap-2 group-hover:text-orange-600">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="md:hidden inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
            View All Articles <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
