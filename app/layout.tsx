import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.canonicalDomain),
  title: site.title,
  description: site.description,
  applicationName: site.siteName,
  alternates: {
    canonical: `${site.canonicalDomain}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: `${site.canonicalDomain}/`,
    siteName: site.siteName,
    locale: site.openGraphLocale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full`}>
      <body className="site-body">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
