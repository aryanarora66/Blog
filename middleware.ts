import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAdminPath = path.startsWith('/admin');
  const isLoginPath = path === '/admin/login';

  // Skip middleware for non-admin paths
  if (!isAdminPath) return NextResponse.next();

  const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';

  // Redirect to login if not authenticated and not already on login page
  if (!isAuthenticated && !isLoginPath) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Redirect to dashboard if authenticated and trying to access login page
  if (isAuthenticated && isLoginPath) {
    return NextResponse.redirect(new URL('/admin/blogs', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};