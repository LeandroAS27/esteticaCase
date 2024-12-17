import type { Metadata } from "next";
import { Bodoni_Moda, Nunito, Quicksand } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({ //para titulos
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-bodoni-moda',
});

const nunito = Nunito({ //corpo do texto
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
});

const quickSand = Quicksand({ //subTitulos
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: "Estetica CaseOne",
  description: "Aesthetic Site created by Leandro Alves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${bodoniModa.variable} ${nunito.variable} antialiased bg-[#F7F1E9] ${quickSand.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
