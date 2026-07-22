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

import QuoteModal from '@/components/QuoteModal'
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
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
        <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />
        <Script id="tailwind-config" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            corePlugins: { preflight: false },
            darkMode: "class",
            theme: {extend: {colors: {"secondary-fixed": "#e2e2e2", "on-surface-variant": "#d8c2b7", tertiary: "#7ad5dc", "on-secondary-fixed": "#1a1c1c", "tertiary-fixed": "#96f1f8", "secondary-container": "#454747", "on-primary-container": "#532300", "on-primary": "#532200", "surface-variant": "#353534", outline: "#a18d83", "on-secondary": "#2f3131", "outline-variant": "#53443b", "primary-container": "#d38657", "on-secondary-fixed-variant": "#454747", "primary-fixed-dim": "#ffb68c", background: "#131313", "tertiary-container": "#48a6ad", "on-tertiary-fixed": "#002022", "inverse-primary": "#8e4e24", "on-tertiary": "#00363a", "on-tertiary-container": "#00373a", "inverse-surface": "#e5e2e1", "inverse-on-surface": "#313030", "on-tertiary-fixed-variant": "#004f54", "secondary-fixed-dim": "#c6c6c7", "primary-fixed": "#ffdbc9", "surface-dim": "#131313", "on-secondary-container": "#b4b5b5", "error-container": "#93000a", error: "#ffb4ab", "surface-container-low": "#1c1b1b", "tertiary-fixed-dim": "#7ad5dc", primary: "#ffb68c", "on-error-container": "#ffdad6", "surface-container": "#201f1f", "on-background": "#e5e2e1", "surface-container-high": "#2a2a2a", "surface-container-lowest": "#0e0e0e", surface: "#131313", "on-primary-fixed-variant": "#71370e", "surface-container-highest": "#353534", secondary: "#c6c6c7", "surface-tint": "#ffb68c", "on-primary-fixed": "#321200", "surface-bright": "#3a3939", "on-error": "#690005", "on-surface": "#e5e2e1"}, borderRadius: {DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px"}, spacing: {"inner-padding": "24px", "section-gap": "120px", "content-gap": "48px", "container-max": "1200px", base: "8px", margin: "24px", xs: "4px", gutter: "16px", md: "16px", xl: "32px", sm: "12px", lg: "24px"}, fontFamily: {"display-lg": ["Sora"], "display-lg-mobile": ["Sora"], "body-lg": ["Plus Jakarta Sans"], "headline-md": ["Noto Serif"], "label-caps": ["Sora"], "button-text": ["Sora"], "body-md": ["Inter"], "label-md": ["Public Sans"], "headline-lg": ["Noto Serif"], headline: ["Sora"], display: ["Sora"], body: ["Plus Jakarta Sans"], label: ["Sora"]}, fontSize: {"display-lg": ["80px", {lineHeight: "90px", letterSpacing: "0.05em", fontWeight: "700"}], "display-lg-mobile": ["48px", {lineHeight: "54px", letterSpacing: "0.02em", fontWeight: "700"}], "body-lg": ["18px", {lineHeight: "28px", letterSpacing: "0px", fontWeight: "400"}], "headline-md": ["24px", {lineHeight: "1.3", fontWeight: "600"}], "label-caps": ["12px", {lineHeight: "16px", letterSpacing: "0.2em", fontWeight: "700"}], "button-text": ["14px", {lineHeight: "20px", letterSpacing: "0.1em", fontWeight: "700"}], "body-md": ["16px", {lineHeight: "1.6", fontWeight: "400"}], "label-md": ["14px", {lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500"}], "headline-lg": ["32px", {lineHeight: "1.2", fontWeight: "700"}]}}}
        `}} />
      </head>
      <body>
        {children}
        <QuoteModal />
      </body>
    </html>
  )
}
