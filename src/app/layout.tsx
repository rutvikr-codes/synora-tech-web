import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1020",
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://synoratech.in"),
  title: {
    default: "Synora Technologies | Meet the Digital Workforce",
    template: "%s | Synora Technologies",
  },
  description:
    "Synora Technologies develops an enterprise Digital Workforce platform to create, orchestrate, and operate intelligent Digital Employees for business operations.",
  keywords: [
    "Digital Workforce",
    "Digital Employees",
    "Enterprise AI",
    "Workflow Orchestration",
    "Synora Technologies",
    "Process Automation",
    "Intelligent Automation",
  ],
  authors: [{ name: "Synora Technologies Private Limited" }],
  creator: "Synora Technologies Private Limited",
  publisher: "Synora Technologies Private Limited",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://synoratech.in",
    siteName: "Synora Technologies",
    title: "Synora Technologies | Meet the Digital Workforce",
    description:
      "Build, orchestrate, and operate Digital Employees designed to help your business get work done.",
    images: [
      {
        url: "/brand/synora-logo-dark.svg",
        width: 1200,
        height: 630,
        alt: "Synora Technologies Logo and Digital Workforce Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synora Technologies | Meet the Digital Workforce",
    description:
      "Build, orchestrate, and operate Digital Employees designed to help your business get work done.",
    images: ["/brand/synora-logo-dark.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="min-h-screen bg-midnight text-cloud-white antialiased flex flex-col selection:bg-electric-indigo selection:text-white">
        {children}
      </body>
    </html>
  );
}
