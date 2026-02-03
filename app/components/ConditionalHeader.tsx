'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();

  // Hide header only on signup page, show on login page
  const shouldShowHeader = !pathname.includes('/signup');

  if (!shouldShowHeader) {
    return null;
  }

  return <Header />;
}
