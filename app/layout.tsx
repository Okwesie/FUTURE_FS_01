import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Caleb Okwesie Arthur - Portfolio",
    template: "%s | Caleb Okwesie Arthur",
  },
  description:
    "Faith-Driven Aspiring Entrepreneur | Computer Science @ Ashesi University | Student Member, ICAG | Software Developer specializing in AI/ML, Fintech, and Full-Stack Development",
  keywords: [
    "Caleb O. Arthur",
    "Caleb Okwesie Arthur",
    "Computer Science",
    "Ashesi University",
    "ICAG",
    "Portfolio",
    "Software Developer",
    "AI/ML Developer",
    "Fintech",
    "Full-Stack Developer",
    "Ghana Developer",
    "Python Developer",
    "Java Developer",
    "React Developer",
    "TensorFlow",
    "Machine Learning",
    "Financial Technology",
    "Student Developer",
    "EmpowerAbled",
    "Peer Tutor",
  ],
  authors: [{ name: "Caleb Okwesie Arthur", url: "https://github.com/Okwesie" }],
  creator: "Caleb Okwesie Arthur",
  publisher: "Caleb Okwesie Arthur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://caleb-arthur-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Caleb Okwesie Arthur - Portfolio",
    description:
      "Faith-Driven Aspiring Entrepreneur | Computer Science @ Ashesi University | Software Developer specializing in AI/ML and Fintech",
    type: "website",
    locale: "en_US",
    url: "https://caleb-arthur-portfolio.vercel.app",
    siteName: "Caleb Arthur Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Caleb Okwesie Arthur - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Okwesie Arthur - Portfolio",
    description: "Faith-Driven Aspiring Entrepreneur | Computer Science @ Ashesi University | Software Developer",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Caleb Okwesie Arthur",
              jobTitle: "Computer Science Student & Software Developer",
              description: "Faith-Driven Aspiring Entrepreneur specializing in AI/ML and Fintech",
              url: "https://caleb-arthur-portfolio.vercel.app",
              sameAs: ["https://github.com/Okwesie", "https://linkedin.com/in/caleb-okwesie-arthur-29b378263"],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Ashesi University",
                url: "https://ashesi.edu.gh",
              },
              memberOf: {
                "@type": "Organization",
                name: "Institute of Chartered Accountants Ghana (ICAG)",
              },
              knowsAbout: [
                "Computer Science",
                "Software Development",
                "Artificial Intelligence",
                "Machine Learning",
                "Financial Technology",
                "Python Programming",
                "Java Programming",
                "React Development",
              ],
              email: "arthurcaleb12@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Accra",
                addressCountry: "Ghana",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
