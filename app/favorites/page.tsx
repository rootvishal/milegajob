'use client';

import { useAuth } from '../../hooks/useAuth';
import { useFavorites } from '../../hooks/useFavorites';
import ProtectedRoute from '../../components/ProtectedRoute';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogOut, Star, ExternalLink } from 'lucide-react';
import Logo from '../components/Logo';
import { jobPortals } from '../../data/jobPortals';

function FavoritesContent() {
  const { logout } = useAuth();
  const router = useRouter();
  const { favorites, loading: favoritesLoading, removeFavorite } = useFavorites();

  const handleSignOut = async () => {
    await logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-amber-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/explore" className="text-blue-900 font-semibold hover:text-orange-600 transition-colors">
              Explore
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 font-semibold transition-colors"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Star className="h-7 w-7 text-amber-500" /> Your Favorites
          </h1>
          <p className="text-gray-600 mb-6">
            Job portals you saved. Add more from the Explore page.
          </p>
          {favoritesLoading ? (
            <p className="text-gray-500">Loading favorites…</p>
          ) : favorites.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
              <Star className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p className="font-medium text-gray-600">No favorites yet</p>
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-blue-900 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Explore portals <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {favorites.map((fav) => {
                const portal = jobPortals.find((p) => p.id === fav.portal_id);
                return (
                  <li key={fav.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{portal?.name ?? `Portal #${fav.portal_id}`}</p>
                      {portal && <p className="text-sm text-gray-600">{portal.description}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      {portal?.url && (
                        <a href={portal.url} target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => removeFavorite(fav.portal_id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        aria-label="Remove from favorites"
                      >
                        <Star className="h-4 w-4 fill-current" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <Link href="/explore" className="inline-flex items-center gap-2 mt-6 text-blue-900 font-semibold hover:text-orange-600">
            Explore more portals <ExternalLink className="h-4 w-4" />
          </Link>
        </section>
      </main>
    </div>
  );
}

export default function FavoritesPage() {
  return (
    <ProtectedRoute>
      <FavoritesContent />
    </ProtectedRoute>
  );
}
