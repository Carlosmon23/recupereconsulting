import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recupere Consulting | Revisão Tributária e Recuperação de Créditos",
  description:
    "Sua empresa pode estar pagando mais tributos do que deveria. Especialistas em revisão de PIS/COFINS, produtos monofásicos e recuperação de créditos via administrativa com 100% de segurança jurídica.",
  keywords: [
    "revisão tributária",
    "recuperação de créditos",
    "PIS e COFINS",
    "tributação monofásica",
    "Simples Nacional",
    "Lucro Presumido",
    "planejamento tributário",
    "Recupere Consulting",
  ],
  authors: [{ name: "Recupere Consulting" }],
  openGraph: {
    title: "Recupere Consulting | Revisão Tributária e Recuperação de Créditos",
    description:
      "Recupere tributos pagos indevidamente nos últimos 5 anos. Diagnóstico preliminar sem custo e honorários no êxito.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="antialiased font-sans selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

