// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAdminPath = path.startsWith('/admin');
  const isLoginPath = path === '/admin/login';
  const isApiPath = path.startsWith('/api/admin');

  // Skip middleware for non-admin and non-admin API paths
  if (!isAdminPath && !isApiPath) {
    return NextResponse.next();
  }

  const session = request.cookies.get('session')?.value;
  const isAuthenticated = !!session;

  // Handle API routes
  if (isApiPath && !isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // Redirect to login if not authenticated and not already on login page
  if (!isAuthenticated && !isLoginPath && isAdminPath) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Redirect to dashboard if authenticated and trying to access login page
  if (isAuthenticated && isLoginPath) {
    return NextResponse.redirect(new URL('/admin/blogs', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};