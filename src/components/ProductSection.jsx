'use client';

import { useRef } from "react";
import ProductCard from "./ProductCard";

export default function ProductSection({ id, title, products, bgColor = "bg-white" }) {
  if (!products || products.length === 0) return null;

  const scrollRef = useRef(null);
  const hasOverflow = products.length > 4;

  const scrollByCards = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.9;
    container.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section
      id={id}
      className={`${bgColor} py-20 scroll-mt-32 lg:scroll-mt-24 relative border-t-2 border-rose-100`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TÍTULO */}
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-2xl font-bold text-pink-800">
            {title}
          </h2>
        </div>

        {/* Carrusel horizontal */}
        <div className="relative">
          {hasOverflow && (
            <button
              type="button"
              aria-label="Ver anteriores"
              onClick={() => scrollByCards(-1)}
              className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-[#FADAD7] text-gray-800 shadow hover:bg-[#f5c7c1]"
            >
              ←
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 pr-2 snap-x snap-mandatory no-scrollbar"
          >
            {products.map(product => (
              <div key={product.id} className="snap-start">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {hasOverflow && (
            <button
              type="button"
              aria-label="Ver siguientes"
              onClick={() => scrollByCards(1)}
              className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-[#FADAD7] text-gray-800 shadow hover:bg-[#f5c7c1]"
            >
              →
            </button>
          )}
        </div>

      </div>
    </section>
  );
}