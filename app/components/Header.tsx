'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-soft">
      <nav className="max-w-7xl mx-auto px-8 py-1 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="flex-1"></div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-gray-700 font-medium hover:text-primary transition-colors duration-300">About</a>
          <a href="#features" className="text-gray-700 font-medium hover:text-primary transition-colors duration-300">What We Do</a>
          <Link href="/blog" className="text-gray-700 font-medium hover:text-primary transition-colors duration-300">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
