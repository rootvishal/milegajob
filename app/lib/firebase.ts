// lib/firebase.ts – Firebase v10+ (client-only). Use NEXT_PUBLIC_* only.
// Credentials live in .env.local – never commit them.

import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAnalytics, type Analytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Guard: only initialize when required env vars are present (client-safe)
const hasRequiredEnv =
  typeof firebaseConfig.apiKey === 'string' &&
  firebaseConfig.apiKey.length > 0 &&
  typeof firebaseConfig.projectId === 'string' &&
  firebaseConfig.projectId.length > 0;

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let analytics: Analytics | null = null;

if (hasRequiredEnv) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
    isSupported().then((yes) => {
      if (yes) analytics = getAnalytics(app);
    });
  }
} else {
  // Placeholder so imports don’t break; auth/db must only be used when env is set
  const emptyConfig = { apiKey: 'dummy', projectId: 'dummy' };
  app = initializeApp(emptyConfig);
  auth = getAuth(app);
  db = getFirestore(app);
}

export { auth, db, analytics, app as default };
