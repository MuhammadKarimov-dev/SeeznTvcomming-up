import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip redirects for:
  // - API routes
  // - Static files (_next, favicon, etc.)
  // - Already on home page
  // - robots.txt, sitemap.xml, manifest.json
  const skipPaths = [
    '/api',
    '/_next',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml',
    '/manifest.json',
    '/logo.png',
    '/icon-',
    '/apple-touch-icon.png',
    '/og-image.jpg'
  ]
  
  const isStaticFile = skipPaths.some(path => pathname.startsWith(path))
  const isHomePage = pathname === '/'
  
  if (isStaticFile || isHomePage) {
    return NextResponse.next()
  }
  
  // Redirect all other routes to home page
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 