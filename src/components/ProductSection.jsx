'use client';

import { useRef } from "react";
import ProductCard from "./ProductCard";

export default function ProductSection({ id, title, products, bgColor = "bg-white" }) {
  if (!products || products.length === 0) return null;

  // Fondo decorativo con guirnalda SVG repetida en el eje X
  const christmasLightsStyle = {
    // Guirnalda de luces vectoriales (SVG)
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='45' viewBox='0 0 100 45' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 50 40 100 0' stroke='%23888' fill='none' stroke-width='1'/%3E%3Cg transform='translate(25, 20)'%3E%3Ccircle r='5' fill='%23ff5f5f' /%3E%3Ccircle r='2' fill='white' opacity='0.5' cx='-1' cy='-1'/%3E%3C/g%3E%3Cg transform='translate(50, 30)'%3E%3Ccircle r='5' fill='%23ffd700' /%3E%3Ccircle r='2' fill='white' opacity='0.5' cx='-1' cy='-1'/%3E%3C/g%3E%3Cg transform='translate(75, 20)'%3E%3Ccircle r='5' fill='%234ade80' /%3E%3Ccircle r='2' fill='white' opacity='0.5' cx='-1' cy='-1'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat-x', 
    backgroundPosition: 'top center',
    backgroundSize: '100px 45px'
  };

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
      // Offset de scroll más alto para evitar que el header tape el título
      className={`${bgColor} py-20 scroll-mt-28 lg:scroll-mt-32 relative border-t-2 border-rose-100 pt-16`}
      style={christmasLightsStyle}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TÍTULO */}
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-2xl font-bold text-pink-800">
            {title}
          </h2>
          <span className="text-xl opacity-80 select-none">🎄</span>
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