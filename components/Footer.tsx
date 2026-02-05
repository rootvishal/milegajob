import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="animated-gradient-bg text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MilegaJob</h3>
            <p className="text-white text-opacity-90">
              India's comprehensive job portal directory helping you find the perfect career opportunity across 100+ platforms.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/explore" className="text-white text-opacity-90 hover:text-white">Explore Jobs</Link></li>
              <li><Link href="/portals" className="text-white text-opacity-90 hover:text-white">All Portals</Link></li>
              <li><Link href="/blog" className="text-white text-opacity-90 hover:text-white">Blog</Link></li>
              <li><Link href="/support" className="text-white text-opacity-90 hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="/how-we-verify" className="text-white text-opacity-90 hover:text-white">Learn how we verify our 100+ job portals</Link></li>
              <li><Link href="/privacy-policy" className="text-white text-opacity-90 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-white text-opacity-90 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-white text-opacity-90">
            © 2024 MilegaJob. All rights reserved. | Made with ❤️ for Indian job seekers.
          </p>
        </div>
      </div>
    </footer>
  );
}
