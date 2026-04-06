import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authRole = request.cookies.get('auth-role')?.value;
  const { pathname } = request.nextUrl;

  // Protect Admin Routes
  if (pathname.startsWith('/admin')) {
    if (authRole !== 'admin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Protect User Dashboard
  if (pathname.startsWith('/user')) {
    if (!authRole) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirect if already logged in
  if (pathname === '/login' || pathname === '/register') {
    if (authRole === 'admin') {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    if (authRole === 'user') {
      return NextResponse.redirect(new URL('/user', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*', '/login', '/register'],
};
