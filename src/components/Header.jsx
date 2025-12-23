"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `${id}`);
    }
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  // Alterna dropdowns en desktop; cierra si vuelves a pulsar el mismo
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    // Cierra dropdowns al hacer clic fuera del nav
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#FADAD7] sticky top-0 z-50 shadow-lg">
      {/* Barra principal con logo y navegación */}
      <div className="max-w-7xl mx-auto px-4 h-28 flex items-center justify-between">

        {/* Identidad de la marca */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "top")}
          className="focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 rounded-md"
        >
          <Image
            src="/Logo_CHERRY_BOMB.png"
            alt="Cherry Bomb"
            width={140}
            height={75}
            priority
          />
        </a>

        {/* Menú desktop; se oculta en mobile */}
        <nav
          ref={navRef}
          className="hidden lg:flex items-center gap-8 text-base font-semibold text-gray-800"
        >
          <MenuDropdown
            label="Chicas"
            open={openMenu === "chicas"}
            onClick={() => toggleMenu("chicas")}
            close={() => setOpenMenu(null)}
            items={[
              { label: "Jeans", targetId: "chicas-jeans" },
              { label: "Faldas y shorts", targetId: "chicas-faldas-shorts" },
              { label: "Pantalones", targetId: "chicas-pantalones" },
              { label: "Blusas", targetId: "chicas-blusas" },
              { label: "Casacas y poleras", targetId: "chicas-casacas-poleras" },
            ]}
            onSelect={(id) => scrollToSection(id)}
          />

          <MenuDropdown
            label="Niñas"
            open={openMenu === "ninas"}
            onClick={() => toggleMenu("ninas")}
            close={() => setOpenMenu(null)}
            items={[
              { label: "Poleras y casacas", targetId: "ninas-poleras-casacas" },
              { label: "Jeans", targetId: "ninas-jeans" },
              { label: "Conjuntos", targetId: "ninas-conjuntos" },
            ]}
            onSelect={(id) => scrollToSection(id)}
          />

          <MenuDropdown
            label="Deportiva"
            open={openMenu === "deportiva"}
            onClick={() => toggleMenu("deportiva")}
            close={() => setOpenMenu(null)}
            items={[
              { label: "Blusas", targetId: "deportiva-blusas" },
              { label: "Pantalones y Pantalonetas", targetId: "deportiva-pantalones" },
            ]}
            onSelect={(id) => scrollToSection(id)}
          />

          <MenuDropdown
            label="Novedades"
            open={openMenu === "novedades"}
            onClick={() => toggleMenu("novedades")}
            close={() => setOpenMenu(null)}
            items={[
              { label: "Peluches", targetId: "novedades-peluches" },
              { label: "Llaveros", targetId: "novedades-llaveros" },
            ]}
            onSelect={(id) => scrollToSection(id)}
          />

          <a href="/" onClick={(e) => handleNavClick(e, "maquillaje")} className="hover:text-pink-600">Maquillaje</a>
          <a href="/" onClick={(e) => handleNavClick(e, "perfumes")} className="hover:text-pink-600">Perfumes</a>
        </nav>

        {/* Botón hamburguesa para mobile */}
        <button
          className="lg:hidden text-4xl text-pink-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú vertical en mobile */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-md px-6 py-6">
          <div className="space-y-6 text-lg font-semibold">
            {/* Chicas */}
            <div>
              <div className="font-bold text-pink-700 mb-2">Chicas</div>
              <div className="ml-4 space-y-2 text-base text-gray-700">
                <a href="/" onClick={(e) => handleNavClick(e, "chicas-jeans")} className="block hover:text-pink-600">Jeans</a>
                <a href="/" onClick={(e) => handleNavClick(e, "chicas-faldas-shorts")} className="block hover:text-pink-600">Faldas y Shorts</a>
                <a href="/" onClick={(e) => handleNavClick(e, "chicas-pantalones")} className="block hover:text-pink-600">Pantalones</a>
                <a href="/" onClick={(e) => handleNavClick(e, "chicas-blusas")} className="block hover:text-pink-600">Blusas</a>
                <a href="/" onClick={(e) => handleNavClick(e, "chicas-casacas-poleras")} className="block hover:text-pink-600">Casacas y Poleras</a>
              </div>
            </div>

            {/* Niñas */}
            <div>
              <div className="font-bold text-pink-700 mb-2">Niñas</div>
              <div className="ml-4 space-y-2 text-base text-gray-700">
                <a href="/" onClick={(e) => handleNavClick(e, "ninas-poleras-casacas")} className="block hover:text-pink-600">Poleras y Casacas</a>
                <a href="/" onClick={(e) => handleNavClick(e, "ninas-jeans")} className="block hover:text-pink-600">Jeans</a>
                <a href="/" onClick={(e) => handleNavClick(e, "ninas-conjuntos")} className="block hover:text-pink-600">Conjuntos</a>
              </div>
            </div>

            {/* Deportiva */}
            <div>
              <div className="font-bold text-pink-700 mb-2">Deportiva</div>
              <div className="ml-4 space-y-2 text-base text-gray-700">
                <a href="/" onClick={(e) => handleNavClick(e, "deportiva-blusas")} className="block hover:text-pink-600">Blusas</a>
                <a href="/" onClick={(e) => handleNavClick(e, "deportiva-pantalones")} className="block hover:text-pink-600">Pantalones y Pantalonetas</a>
              </div>
            </div>

            {/* Novedades */}
            <div>
              <div className="font-bold text-pink-700 mb-2">Novedades</div>
              <div className="ml-4 space-y-2 text-base text-gray-700">
                <a href="/" onClick={(e) => handleNavClick(e, "novedades-peluches")} className="block hover:text-pink-600">Peluches</a>
                <a href="/" onClick={(e) => handleNavClick(e, "novedades-llaveros")} className="block hover:text-pink-600">Llaveros</a>
              </div>
            </div>

            {/* Maquillaje */}
            <a href="/" onClick={(e) => handleNavClick(e, "maquillaje")} className="block hover:text-pink-600 text-pink-700">Maquillaje</a>

            {/* Perfumes */}
            <a href="/" onClick={(e) => handleNavClick(e, "perfumes")} className="block hover:text-pink-600 text-pink-700">Perfumes</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- DROPDOWN ---------- */

function MenuDropdown({ label, open, onClick, close, items, onSelect }) {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="flex items-center gap-1 hover:text-pink-600"
      >
        {label}
        <span className="text-xs">▼</span>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-md border border-pink-200">
          {items.map(item => (
            <a
              key={item.targetId}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onSelect(item.targetId);
              }}
              className="block px-4 py-2 text-base hover:bg-pink-100 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
