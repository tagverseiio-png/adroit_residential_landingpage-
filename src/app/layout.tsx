import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adroit Design | Residential Architectural Design, Interiors & Construction',
  description: 'Adroit Design plans, designs and builds homes end-to-end — residential architecture, interiors and turnkey construction for villas, independent houses and apartments, from concept to move-in.',
  keywords: 'residential architectural design, home interior design company, turnkey house construction, villa design and construction, residential construction company, home renovation contractor, house architect near me, apartment interior design, custom home design, residential turnkey projects',
  robots: 'index, follow',
  metadataBase: new URL('https://www.adroitdesign.example'),
  alternates: { canonical: '/residential' },
  openGraph: {
    type: 'website',
    siteName: 'Adroit Design',
    title: 'Adroit Design | Residential Architectural Design, Interiors & Construction',
    description: 'From floor plan to finished home — residential architecture, interiors and turnkey construction under one accountable team.',
    url: 'https://www.adroitdesign.example/residential',
    images: [{ url: 'https://www.adroitdesign.example/og-residential.jpg' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adroit Design | Residential Architectural Design, Interiors & Construction',
    description: 'From floor plan to finished home — residential architecture, interiors and turnkey construction under one accountable team.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HomeAndConstructionBusiness',
      name: 'Adroit Design',
      description: 'Residential architectural design, interiors and turnkey construction company for villas, independent houses and apartments.',
      url: 'https://www.adroitdesign.example/residential',
      telephone: '+91-90000-00000',
      priceRange: '₹₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Add your office address here',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        postalCode: '600000',
        addressCountry: 'IN',
      },
      areaServed: 'Chennai, Tamil Nadu, India',
      sameAs: [
        'https://www.instagram.com/adroitdesign',
        'https://www.linkedin.com/company/adroitdesign',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the cost of residential construction per square foot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Turnkey residential construction typically ranges based on specification level, structure type and finishes chosen. Adroit Design shares a detailed, itemised cost estimate after the initial site visit and brief, so there are no hidden costs later.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build a house or villa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A typical independent house or villa takes 8 to 14 months from foundation to handover depending on built-up area and design complexity, with a fixed schedule shared before construction begins.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Adroit Design handle government approvals and plan sanction?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Plan sanction, statutory approvals and liaison with local authorities are handled as part of the design and turnkey construction package, so clients do not have to navigate approvals separately.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Adroit Design design a Vastu-compliant home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Vastu-compliant planning is available on request and can be incorporated into the architectural layout from the earliest design stage without compromising functionality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I hire Adroit Design only for interior design, without construction?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Residential architecture, interiors and turnkey construction are offered both as a combined package and as standalone services, depending on what stage your project is at.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-XXXXXXXXX');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
