import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saspian.dev"),

  title: "Sanjay Gurung | Software Engineer | Full-Stack Developer",
  description:
    "Sanjay Gurung is a professional Software Engineer and Full-Stack Developer based in Germany, specializing in React, TypeScript, JavaScript, Python, scalable SaaS applications, modern web development, and premium digital product experiences.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  authors: [
    {
      name: "Sanjay Gurung",
      url: "https://www.saspian.dev",
    },
  ],

  openGraph: {
    title: "Sanjay Gurung Portfolio",
    description:
      "Professional Software Engineer specializing in React, TypeScript, Python, SaaS applications, and premium digital product development.",
    url: "https://www.saspian.dev",
    siteName: "Saspian",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Sanjay Portfolio Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanjay Gurung | Software Engineer",
    description:
      "Professional Full-Stack Developer building scalable SaaS products and premium web applications.",
    images: ["/preview.jpg"],
    site: "@saspiansparrow",
    creator: "@saspiansparrow",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <script defer src="https://cloud.umami.is/script.js" data-website-id="4cd26692-86cf-4ab1-85fa-fa595ecec138"></script>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
