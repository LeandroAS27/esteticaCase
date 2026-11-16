import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/config/site";
import "./globals.css";

const bodoniModa = localFont({ src: "../fonts/bodoni-latin.woff2", variable: "--font-bodoni-moda", display: "swap" });
const nunito = localFont({ src: "../fonts/nunito-latin.woff2", variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: { title: site.seo.title, description: site.seo.description, images: [site.seo.ogImage], locale: "pt_BR" },
  robots: site.demo ? { index: false, follow: false } : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bodoniModa.variable} ${nunito.variable} antialiased pb-20 md:pb-0`}
      >
        {children}
      </body>
    </html>
  );
}
