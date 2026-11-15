import type { Metadata } from "next";
import { Bodoni_Moda, Nunito } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-bodoni-moda',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
});

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
