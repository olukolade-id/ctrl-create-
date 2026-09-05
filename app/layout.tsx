import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CTRL + CREATE — Independent Design Practice",
  description:
    "CTRL + CREATE is an independent design practice building visual identities, digital worlds and things that stay in your head.",
  generator: "CTRL + CREATE",
  metadataBase: new URL("https://ctrlcreate.studio"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "CTRL + CREATE — Independent Design Practice",
    description:
      "Visual identities, digital worlds and motion systems by CTRL + CREATE.",
    type: "website",
    siteName: "CTRL + CREATE",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "CTRL + CREATE portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTRL + CREATE — Independent Design Practice",
    description: "Visual identities, digital worlds and motion systems by Idowu Olukolade Goodness.",
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#10110f",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
