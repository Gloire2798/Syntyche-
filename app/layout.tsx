import type { Metadata, Viewport } from "next";
import { Caveat, Special_Elite, Inter } from "next/font/google";

// Police manuscrite pour les titres
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

// Police "machine à écrire" pour l'effet vintage
const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-special",
  display: "swap",
});

// Police simple pour la lecture des longs textes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syntyche",
  description: "Une histoire, un avenir.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#F4EBD9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${caveat.variable} ${specialElite.variable} ${inter.variable}`}
    >
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          backgroundColor: "#F4EBD9", // Fond beige sable
          color: "#2C3E50", // Bleu encre
          minHeight: "100vh",
          WebkitFontSmoothing: "antialiased",
          // Petite texture d'ambiance
          backgroundImage: "radial-gradient(#d5c4a1 0.5px, transparent 0.5px)",
          backgroundSize: "20px 20px",
        }}
      >
        {children}
      </body>
    </html>
  );
}
