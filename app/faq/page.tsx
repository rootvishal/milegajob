'use client';

import Link from 'next/link';
import { ChevronDown, User } from 'lucide-react';
import { useState } from 'react';
import Logo from '../components/Logo';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is MilegaJob?',
      answer: 'MilegaJob is a comprehensive platform that aggregates and organizes all major job portals in one place. We help you discover, compare, and choose the best job portal for your career stage and requirements.'
    },
    {
      question: 'Is MilegaJob free to use?',
      answer: 'Yes! MilegaJob is completely free. You can browse, search, and filter job portals without any cost. We make it easy for you to find the right job portal for your needs.'
    },
    {
      question: 'How do I save my favorite job portals?',
      answer: 'Once you create an account, you can bookmark your favorite job portals from the explore page. Your bookmarks will be saved to your Favorites for quick access anytime.'
    },
    {
      question: 'Can I filter job portals by category?',
      answer: 'Absolutely! We categorize job portals by different career stages: Freshers, Experienced, Internships, and Government jobs. Use our filter buttons to find portals tailored to your needs.'
    },
    {
      question: 'How are the ratings and reviews calculated?',
      answer: 'Our ratings are based on authentic feedback from thousands of job seekers who use these platforms. We aggregate user experiences to provide honest, unbiased ratings for each portal.'
    },
    {
      question: 'Can I search for specific job portals?',
      answer: 'Yes! Use the search bar in the Featured Job Portals section to find specific portals by name or company. You can also filter by category to narrow down your options.'
    },
    {
      question: 'How often are the job portals updated?',
      answer: 'Our job portal list is regularly updated to include new platforms and remove inactive ones. We ensure you always have access to the most current and relevant job portals.'
    },
    {
      question: 'How do I get the most out of MilegaJob?',
      answer: 'Explore different categories, read portal descriptions and ratings, and visit the portals that best match your job search needs. Our platform is designed to help you discover the right job opportunities efficiently.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-amber-50">


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-orange-100">Find answers to common questions about MilegaJob</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-orange-200 transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-blue-50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 text-left">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                    openFAQ === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === idx && (
                <div className="px-8 py-6 bg-gradient-to-br from-blue-50 to-orange-50 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Still need help?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact our support team and we'll be happy to assist you with any questions.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:shadow-lg transition-all text-lg"
          >
            Contact Support
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-900 to-orange-600 flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <span className="font-bold text-lg">MilegaJob</span>
              </div>
              <p className="text-gray-400">Your one-stop solution for job seeking.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
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
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Contact</Link></li>
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
