import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kabbatec.com.br"),
  title: {
    default: "Kabbatec Construções | Inovação e Precisão em Construção",
    template: "%s | Kabbatec",
  },
  description:
    "Mais de 30 anos construindo o futuro com inovação e precisão. Líderes em arquitetura moderna para espaços premium.",
  openGraph: {
    title: "Kabbatec Construções | Inovação e Precisão em Construção",
    description:
      "Mais de 30 anos construindo o futuro com inovação e precisão. Líderes em arquitetura moderna para espaços premium.",
    url: "/",
    siteName: "Kabbatec",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/landing-page-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Kabbatec - Construindo o Futuro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabbatec Construções | Inovação e Precisão em Construção",
    description:
      "Mais de 30 anos construindo o futuro com inovação e precisão.",
    images: ["/landing-page-screenshot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${jakarta.variable} ${mono.variable} ${grotesk.variable} antialiased`}
      >
        {/* JSON-LD – Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kabbatec Construções",
              url: "https://kabbatec.com.br",
              sameAs: [
                "https://kabbatec.com.br"
              ],
            }),
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
