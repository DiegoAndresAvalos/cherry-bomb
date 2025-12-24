"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import products from "@/data/products";
import { CartProvider } from "@/components/CartContext";
import dynamic from "next/dynamic";

const SelectedProductsModal = dynamic(() => import("@/components/SelectedProductsModal"), { ssr: false });
const WelcomeModal = dynamic(() => import("@/components/WelcomeModal"), { ssr: false });

export default function Home() {
  return (
    <CartProvider>
      <div id="top" />
      {/* Header y badge flotante de selección */}
      <Header />
      <SelectedProductsModal />
      <WelcomeModal />

      {/* CHICAS */}
      <ProductSection id="chicas-jeans" title="Chicas · Jeans" products={products.chicas.jeans} />
      <ProductSection id="chicas-faldas-shorts" title="Chicas · Faldas y Shorts" products={products.chicas.faldasYShorts} />
      <ProductSection id="chicas-pantalones" title="Chicas · Pantalones" products={products.chicas.pantalones} />
      <ProductSection id="chicas-blusas" title="Chicas · Blusas" products={products.chicas.blusas} />
      <ProductSection id="chicas-casacas-poleras" title="Chicas · Casacas y Poleras" products={products.chicas.casacasYPoleras} />

      {/* NIÑAS */}
      <ProductSection id="ninas-poleras-casacas" title="Niñas · Poleras y Casacas" products={products.niñas.polerasYCasacas} bgColor="bg-pink-50" />
      <ProductSection id="ninas-jeans" title="Niñas · Jeans" products={products.niñas.jeans} bgColor="bg-pink-50" />
      <ProductSection id="ninas-conjuntos" title="Niñas · Conjuntos" products={products.niñas.conjuntos} bgColor="bg-pink-50" />

      {/* DEPORTIVA */}
      {/* --- AQUI FALTABA ESTA SECCIÓN --- */}
      <ProductSection id="deportiva-blusas" title="Deportiva · Blusas" products={products.deportiva.blusas} />
      <ProductSection id="deportiva-pantalones" title="Deportiva · Pantalones y Pantalonetas" products={products.deportiva.pantalonesYPantalonetas} />

      {/* NOVEDADES */}
      <ProductSection id="novedades-peluches" title="Novedades · Peluches" products={products.novedades.peluches} bgColor="bg-pink-50" />
      <ProductSection id="novedades-llaveros" title="Novedades · Llaveros" products={products.novedades.llaveros} bgColor="bg-pink-50" />

      {/* MAQUILLAJE / PERFUMES */}
      <ProductSection id="maquillaje" title="Maquillaje" products={products.maquillaje} />
      <ProductSection id="perfumes" title="Perfumes" products={products.perfumes} />

      <Footer />
    </CartProvider>
  );
}