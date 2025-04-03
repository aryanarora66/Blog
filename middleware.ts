// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAdminPath = path.startsWith('/admin');
  const isLoginPath = path === '/admin/login';
  const isApiPath = path.startsWith('/api/admin');
  const isApiLoginPath = path === '/api/admin/login';

  // Skip middleware for non-admin paths and login API
  if ((!isAdminPath && !isApiPath) || isApiLoginPath) {
    return NextResponse.next();
  }

  // Check if authenticated via session cookie
  const session = request.cookies.get('session')?.value;
  const isAuthenticated = !!session;

  // Also check for the non-HTTP only cookie for client-side
  const isAuthCookie = request.cookies.get('isAuthenticated')?.value === 'true';

  // Log for debugging
  console.log(`Middleware check: path=${path}, isAuthenticated=${isAuthenticated}, isAuthCookie=${isAuthCookie}`);

  // Handle API routes (except login)
  if (isApiPath && !isAuthenticated && !isApiLoginPath) {
    console.log('API route rejected: not authenticated');
    return new NextResponse(
      JSON.stringify({ error: 'Unauthorized', code: 'not_authenticated' }),
      { 
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  // Redirect to login if not authenticated and not already on login page
  if (!isAuthenticated && !isLoginPath && isAdminPath) {
    console.log('Redirecting to login page');
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Redirect to dashboard if authenticated and trying to access login page
  if (isAuthenticated && isLoginPath) {
    console.log('Redirecting to dashboard - already logged in');
    return NextResponse.redirect(new URL('/admin/blogs', request.url));
  }

  // Continue for authenticated requests
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};