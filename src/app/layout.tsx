import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    default: "Slymax Nigeria Limited | Construction, Steel Supply & Heavy Equipment",
    template: "%s | Slymax Nigeria Limited",
  },
  description: "Leading Nigerian company specializing in construction, steel material supply, scaffolding, gas & fire equipment, heavy equipment leasing, and jib crane supply. Your trusted partner for industrial and construction solutions.",
  keywords: [
    "construction company Nigeria",
    "steel material supply Lagos",
    "scaffolding rental Nigeria",
    "gas equipment supplier",
    "fire equipment Nigeria",
    "heavy equipment leasing",
    "jib crane supply",
    "Slymax Nigeria Limited",
    "industrial equipment supplier Lagos",
  ],
  authors: [{ name: "Slymax Nigeria Limited" }],
  creator: "Slymax Nigeria Limited",
  publisher: "Slymax Nigeria Limited",
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
    url: "https://slymaxnig.com",
    siteName: "Slymax Nigeria Limited",
    title: "Slymax Nigeria Limited | Construction, Steel Supply & Heavy Equipment",
    description: "Leading Nigerian company specializing in construction, steel material supply, scaffolding, gas & fire equipment, heavy equipment leasing, and jib crane supply.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Slymax Nigeria Limited - Industrial & Construction Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slymax Nigeria Limited | Construction, Steel Supply & Heavy Equipment",
    description: "Leading Nigerian company specializing in construction, steel material supply, scaffolding, gas & fire equipment, heavy equipment leasing, and jib crane supply.",
    images: ["/og-image.jpg"],
    creator: "@slymaxnig",
  },
  verification: {
    google: "google-site-verification-code",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}