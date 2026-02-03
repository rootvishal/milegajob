'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex-1"></div>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#about" className="text-blue-900 font-bold hover:text-orange-600 transition-colors">About</a>
          <a href="#features" className="text-blue-900 font-bold hover:text-orange-600 transition-colors">What We Do</a>
          <Link href="/blog" className="text-blue-900 font-bold hover:text-orange-600 transition-colors">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
