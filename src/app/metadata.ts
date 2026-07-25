import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://slymaxnig.com"),
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