'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './useAuth';
import { auth } from '../app/lib/firebase';

const API = '/api/favorites';

async function getToken(): Promise<string | null> {
  const user = auth.currentUser;
  if (!user) return null;
  return user.getIdToken();
}

export interface FavoriteRow {
  id: number;
  portal_id: number;
  created_at: string;
}

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<FavoriteRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFavorites = useCallback(async () => {
    if (!user) {
      setFavorites([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const token = await getToken();
      if (!token) {
        setFavorites([]);
        return;
      }
      const res = await fetch(API, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Failed to load favorites');
      }
      const data = await res.json();
      setFavorites(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load favorites');
      setFavorites([]);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const addFavorite = useCallback(async (portalId: number) => {
    if (!user) return;
    const token = await getToken();
    if (!token) return;
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ portal_id: portalId }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data?.error ?? 'Failed to add favorite');
    }
    await fetchFavorites();
  }, [user, fetchFavorites]);

  const removeFavorite = useCallback(async (portalId: number) => {
    if (!user) return;
    const token = await getToken();
    if (!token) return;
    const res = await fetch(`${API}?portal_id=${portalId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data?.error ?? 'Failed to remove favorite');
    }
    await fetchFavorites();
  }, [user, fetchFavorites]);

  const isFavorited = useCallback(
    (portalId: number) => favorites.some((f) => f.portal_id === portalId),
    [favorites]
  );

  return {
    favorites,
    loading,
    error,
    refetch: fetchFavorites,
    addFavorite,
    removeFavorite,
    isFavorited,
  };
}
