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

export const metadata = {
  title: "Cherry Bomb 🍒 - Tienda de Moda Femenina",
  description: "Descubre la mejor moda para chicas y niñas. Jeans, blusas, casacas, maquillaje, perfumes y más. ¡Consulta por WhatsApp!",
  keywords: ["moda femenina", "ropa para chicas", "ropa para niñas", "jeans", "blusas", "maquillaje", "perfumes", "tienda online"],
  authors: [{ name: "Cherry Bomb" }],
  openGraph: {
    title: "Cherry Bomb 🍒 - Moda Femenina Online",
    description: "Tu tienda favorita de moda para chicas y niñas. Encuentra los mejores estilos y consulta por WhatsApp.",
    url: "https://cherry-bomb.vercel.app",
    siteName: "Cherry Bomb",
    images: [
      {
        url: "/Logo_CHERRY_BOMB.png",
        width: 1200,
        height: 630,
        alt: "Cherry Bomb - Tienda de Moda",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherry Bomb 🍒 - Moda Femenina",
    description: "Descubre la mejor moda para chicas y niñas. ¡Consulta por WhatsApp!",
    images: ["/Logo_CHERRY_BOMB.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Fuente global y suavizado para todo el app shell */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
