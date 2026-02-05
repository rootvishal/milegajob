'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 animated-gradient-bg">
      <nav className="max-w-7xl mx-auto px-8 py-1 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="flex-1"></div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-white font-medium hover:text-white hover:opacity-80 transition-colors duration-300">About</a>
          <a href="#features" className="text-white font-medium hover:text-white hover:opacity-80 transition-colors duration-300">What We Do</a>
          <Link href="/blog" className="text-white font-medium hover:text-white hover:opacity-80 transition-colors duration-300">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
