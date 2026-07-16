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
  title: "ATLAS OZ LTD | UK Visa Support & Translation Services",
  description:
    "Professional UK visa support, translation services and form assistance. Helping individuals and families with UK visa applications, ILR, citizenship and official documents.",
  metadataBase: new URL("https://atlasoz.co.uk"),
  alternates: {
    languages: {
      tr: "/",
      en: "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}