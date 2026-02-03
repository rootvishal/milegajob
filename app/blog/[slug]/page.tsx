'use client';

import { useParams } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, Heart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../components/Logo';
import { blogPosts } from '../../../data/blogs';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [isFavorited, setIsFavorited] = useState(false);

  const blog = blogPosts.find(post => post.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-amber-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Logo />
          </nav>
        </header>
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-orange-600 font-semibold hover:text-orange-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const contentParts = blog.content.split('\n\n');

  return (
    <div className="min-h-screen bg-white">

      {/* Blog Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-3xl">{blog.icon}</span>
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
              {blog.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{blog.title}</h1>
          
          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{blog.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          {contentParts.map((part, idx) => {
            // Handle headings
            if (part.startsWith('# ')) {
              return (
                <h1 key={idx} className="text-4xl font-bold text-gray-900 mt-8 mb-6">
                  {part.replace('# ', '')}
                </h1>
              );
            }
            if (part.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                  {part.replace('## ', '')}
                </h2>
              );
            }
            if (part.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                  {part.replace('### ', '')}
                </h3>
              );
            }

            // Handle lists
            if (part.startsWith('- ')) {
              const items = part.split('\n').filter(line => line.startsWith('- '));
              return (
                <ul key={idx} className="list-disc list-inside space-y-2 my-6 text-gray-700">
                  {items.map((item, i) => (
                    <li key={i} className="text-lg leading-relaxed">
                      {item.replace('- ', '')}
                    </li>
                  ))}
                </ul>
              );
            }

            // Handle tables
            if (part.includes('|')) {
              return (
                <div key={idx} className="overflow-x-auto my-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {part.split('\n').filter(line => line.includes('|')).map((row, i) => (
                        <tr key={i} className={i === 0 ? 'bg-blue-600 text-white' : i === 1 ? 'bg-gray-100' : ''}>
                          {row.split('|').filter(cell => cell.trim()).map((cell, j) => (
                            <td key={j} className="border border-gray-300 px-4 py-3 text-sm">
                              {cell.trim()}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            // Regular paragraphs
            return (
              <p key={idx} className="text-lg text-gray-700 leading-relaxed my-6">
                {part}
              </p>
            );
          })}
        </div>

        {/* SEO Metadata Display */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-12 rounded">
          <h3 className="font-bold text-gray-900 mb-4">SEO Metadata</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">SEO Title:</p>
              <p className="text-blue-600">{blog.seoTitle}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Meta Description:</p>
              <p className="text-blue-600">{blog.metaDescription}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Keywords:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {blog.keywords.map((keyword, idx) => (
                  <span key={idx} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-orange-600 text-white p-8 rounded-xl mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Bookmark Your Favorite Job Portals?</h3>
          <p className="text-orange-100 mb-6">
            Use MilegaJob to save all these insights, bookmark job portals, and track your applications in one place.
          </p>
          <button className="bg-white text-blue-900 font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-all">
            Sign Up for MilegaJob Free
          </button>
        </div>

        {/* Share Section */}
        <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
          <div className="flex gap-4">
            <span className="text-gray-600 font-semibold">Share this post:</span>
            <button className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
              LinkedIn
            </button>
            <button className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
              Twitter
            </button>
          </div>
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-red-500 transition-colors"
          >
            <Heart
              size={20}
              className={isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'}
            />
            {isFavorited ? 'Saved' : 'Save Post'}
          </button>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter(post => post.id !== blog.id && post.category === blog.category)
              .slice(0, 3)
              .map(relatedBlog => (
                <Link
                  key={relatedBlog.id}
                  href={`/blog/${relatedBlog.slug}`}
                  className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 flex items-center justify-between">
                    <span className="text-4xl">{relatedBlog.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{relatedBlog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedBlog.readTime} min read</span>
                      <span className="text-blue-600 font-semibold">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 MilegaJob. Your one-stop solution for job seeking.
          </p>
        </div>
      </footer>
    </div>
  );
}
