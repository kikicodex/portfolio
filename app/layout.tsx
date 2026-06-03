import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keerthanakr.vercel.app"),
  title: "Keerthana K R — Full-Stack Engineer & AppSec Enthusiast",
  description:
    "Full-Stack Engineer & AppSec Enthusiast based in Bangalore, India. I build production-grade products with Next.js, React Native, Node.js, and more.",
  keywords: [
    "Full-Stack Engineer",
    "AppSec",
    "Next.js",
    "React",
    "TypeScript",
    "Bangalore",
    "Keerthana",
  ],
  authors: [{ name: "Keerthana K R" }],
  openGraph: {
    title: "Keerthana K R — Full-Stack Engineer & AppSec Enthusiast",
    description:
      "Full-Stack Engineer & AppSec Enthusiast. I build things that actually ship.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keerthana K R — Full-Stack Engineer",
    description: "Full-Stack Engineer & AppSec Enthusiast based in Bangalore.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} antialiased noise`}>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#161616",
              border: "1px solid #8B5535",
              color: "#f5f5f5",
              fontFamily: "var(--font-inter)",
            },
          }}
        />
      </body>
    </html>
  );
}
