import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { OrganizationSchema } from "@/components/seo/JsonLd"
import { cn } from "@/lib/utils"
import { companyInfo } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL(companyInfo.website),
  title: {
    default: `${companyInfo.name} | Construction, Oil & Gas, Telecommunication Nigeria`,
    template: `%s | ${companyInfo.name}`,
  },
  description: `${companyInfo.name} is a leading Nigerian company providing oil & gas, telecommunication, real estate, haulage & logistics, and building & construction services across Nigeria.`,
  keywords: [
    "construction company Nigeria",
    "oil and gas Nigeria",
    "telecommunication infrastructure Nigeria",
    "real estate Nigeria",
    "haulage logistics Nigeria",
    "building construction Nigeria",
    "steel material supply Nigeria",
    "heavy equipment leasing Nigeria",
    "Slymax Nigeria Limited",
    "Benin City construction company",
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
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
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: companyInfo.website,
    siteName: companyInfo.name,
    title: `${companyInfo.name} | Engineering Excellence. Trusted Partnership.`,
    description: `${companyInfo.name} provides oil & gas, telecommunication, real estate, haulage & logistics, and building & construction services across Nigeria.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${companyInfo.name} - Engineering & Construction Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.name} | Engineering Excellence`,
    description: `${companyInfo.name} provides oil & gas, telecommunication, real estate, haulage & logistics, and building & construction services across Nigeria.`,
    images: ["/og-image.jpg"],
    creator: "@slymaxnig",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable, "scroll-smooth")}>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <OrganizationSchema />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}