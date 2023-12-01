import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;

  if(searchParams.has('external')) {
    return NextResponse.rewrite(new URL('https://www.google.com', request.url));
  }

  if(searchParams.has('internal')) {
    return NextResponse.rewrite(new URL('/rewrite-dest', request.url));
  }

  return NextResponse.next();
}
