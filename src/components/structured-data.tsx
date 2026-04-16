'use client';

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Scale My Business - 3-Week Intensive',
    'description': 'Transform your business from zero to consistent orders in 3 weeks. Learn business strategy, sales, and digital marketing.',
    'url': 'https://olubunmiojo.com',
    'author': {
      '@type': 'Person',
      'name': 'Olubunmi Ojo',
      'url': 'https://olubunmiojo.com',
      'sameAs': [
        'https://instagram.com/dayari.ng',
        'https://wa.me/2347088737006'
      ]
    },
    'provider': {
      '@type': 'Organization',
      'name': 'Olubunmi Ojo',
      'url': 'https://olubunmiojo.com'
    },
    'offers': {
      '@type': 'Offer',
      'price': '30000',
      'priceCurrency': 'NGN',
      'availability': 'https://schema.org/PreOrder'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '3',
      'bestRating': '5',
      'worstRating': '1'
    },
    'review': [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amaka Osei'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'This program completely changed how I think about marketing. Within 60 days I tripled my leads without increasing ad spend.'
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Chidi Nwosu'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Practical, no-fluff, and deeply strategic. Best investment I have made in my business this year.'
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Fatima Bello'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The clarity I got on my positioning alone was worth 10x the price. Book the call, you won\'t regret it.'
      }
    ],
    'duration': 'P3W'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Olubunmi Ojo - Scale My Business',
    'description': 'Business coaching & digital marketing education platform',
    'url': 'https://olubunmiojo.com',
    'telephone': '+2347088737006',
    'sameAs': [
      'https://instagram.com/dayari.ng',
      'https://wa.me/2347088737006'
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Business Inquiry',
      'telephone': '+2347088737006',
      'url': 'https://wa.me/2347088737006'
    },
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'NG'
    },
    'founder': {
      '@type': 'Person',
      'name': 'Olubunmi Ojo'
    },
    'itemListElement': [
      { "name": "Home", "item": "https://olubunmiojo.com" },
      { "name": "About", "item": "https://olubunmiojo.com#about" }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
