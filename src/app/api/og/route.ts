import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const width = 1200;
  const height = 630;

  return new NextResponse(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Background Gradient -->
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(99,40,210);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(150,70,230);stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      
      <!-- Orange accent bar -->
      <rect width="8" height="${height}" fill="rgb(255,155,56)"/>
      
      <!-- Main Text -->
      <text x="80" y="120" font-family="Georgia, serif" font-size="72" font-weight="bold" fill="white" letter-spacing="-1">
        Scale My Business
      </text>
      
      <!-- Subheading -->
      <text x="80" y="200" font-family="Georgia, serif" font-size="48" fill="rgb(255,200,100)">
        3 Weeks to Consistent Orders
      </text>
      
      <!-- Description -->
      <text x="80" y="300" font-family="sans-serif" font-size="32" fill="white" opacity="0.9">
        Learn business strategy, sales & marketing from
      </text>
      <text x="80" y="350" font-family="sans-serif" font-size="32" fill="white" opacity="0.9">
        someone who started with ₦30,000
      </text>
      
      <!-- Price -->
      <rect x="80" y="420" width="250" height="100" rx="16" fill="rgba(255,155,56,0.15)" stroke="rgb(255,155,56)" stroke-width="3"/>
      <text x="105" y="465" font-family="sans-serif" font-size="48" font-weight="bold" fill="rgb(255,155,56)">
        ₦30,000
      </text>
      <text x="105" y="505" font-family="sans-serif" font-size="24" fill="white" opacity="0.8">
        Program Price
      </text>
      
      <!-- Instructor Name -->
      <text x="80" y="600" font-family="sans-serif" font-size="28" fill="white" opacity="0.7">
        Olubunmi Ojo • CEO, Dayari.ng
      </text>
    </svg>`,
    {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600',
      },
    }
  );
}
