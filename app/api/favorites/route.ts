import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { jwtVerify, importX509 } from 'jose';

const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const FIREBASE_X509_URL = 'https://www.googleapis.com/service_accounts/v1/metadata/x509/securetoken@system.gserviceaccount.com';

async function getFirebaseUidFromToken(authHeader: string | null): Promise<string | null> {
  if (!authHeader?.startsWith('Bearer ') || !FIREBASE_PROJECT_ID) return null;
  const token = authHeader.slice(7);
  if (!token) return null;

  try {
    const res = await fetch(FIREBASE_X509_URL);
    const certs: Record<string, string> = await res.json();
    const headerJson = atob(token.split('.')[0].replace(/-/g, '+').replace(/_/g, '/'));
    const header = JSON.parse(headerJson);
    const cert = certs[header.kid];
    if (!cert) return null;

    const publicKey = await importX509(cert, 'RS256');
    const { payload } = await jwtVerify(token, publicKey, {
      issuer: `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`,
      audience: FIREBASE_PROJECT_ID,
      algorithms: ['RS256'],
    });
    return (payload.uid as string) ?? null;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const uid = await getFirebaseUidFromToken(request.headers.get('authorization'));
  if (!uid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, serviceKey);
  const { data, error } = await supabase
    .from('favorites')
    .select('id, portal_id, created_at')
    .eq('user_id', uid)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data ?? []);
}

export async function POST(request: NextRequest) {
  const uid = await getFirebaseUidFromToken(request.headers.get('authorization'));
  if (!uid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { portal_id?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const portalId = typeof body?.portal_id === 'number' ? body.portal_id : null;
  if (portalId == null) {
    return NextResponse.json({ error: 'portal_id required' }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, serviceKey);
  const { data, error } = await supabase
    .from('favorites')
    .insert({ user_id: uid, portal_id: portalId })
    .select('id, portal_id, created_at')
    .single();

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ message: 'Already favorited', data: null }, { status: 200 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest) {
  const uid = await getFirebaseUidFromToken(request.headers.get('authorization'));
  if (!uid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const portalId = request.nextUrl.searchParams.get('portal_id');
  const id = portalId ? parseInt(portalId, 10) : NaN;
  if (Number.isNaN(id)) {
    return NextResponse.json({ error: 'portal_id required' }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, serviceKey);
  const { error } = await supabase
    .from('favorites')
    .delete()
    .eq('user_id', uid)
    .eq('portal_id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
