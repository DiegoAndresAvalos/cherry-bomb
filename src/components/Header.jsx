"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* BARRA DECORATIVA SUPERIOR TIPO "CANDY CANE" */}
      <div 
        className="h-2 w-full sticky top-0 z-50"
        style={{
          background: "repeating-linear-gradient(45deg, #ef4444, #ef4444 10px, #ffffff 10px, #ffffff 20px)"
        }}
      />

      {/* HEADER PRINCIPAL */}
      <header className="bg-[#FADAD7] sticky top-2 z-40 shadow-lg transition-all relative">
        <div className="max-w-7xl mx-auto px-4 h-28 flex items-center justify-between">

          {/* LOGO CON GORRITO DE SANTA */}
<<<<<<< HEAD
          <a href="#top" className="relative group">
=======
          <div className="relative group">
>>>>>>> 5f6f382240afc4c55bad3e424ac1da9a3121b806
            <span className="absolute -top-5 -left-4 text-4xl z-10 drop-shadow-md rotate-[-15deg] group-hover:rotate-[-25deg] transition-transform duration-300">
              🎅
            </span>
            <Image
              src="/Logo_CHERRY_BOMB.png"
              alt="Cherry Bomb"
              width={140}
              height={75}
              priority
              className="relative z-0"
            />
<<<<<<< HEAD
          </a>
=======
          </div>
>>>>>>> 5f6f382240afc4c55bad3e424ac1da9a3121b806

          {/* DESKTOP MENU */}
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
                { label: "Jeans", href: "#chicas-jeans" },
                { label: "Faldas y shorts", href: "#chicas-faldas-shorts" },
                { label: "Pantalones", href: "#chicas-pantalones" },
                { label: "Blusas", href: "#chicas-blusas" },
                { label: "Casacas y poleras", href: "#chicas-casacas-poleras" },
              ]}
            />

            <MenuDropdown
              label="Niñas"
              open={openMenu === "ninas"}
              onClick={() => toggleMenu("ninas")}
              close={() => setOpenMenu(null)}
              items={[
                { label: "Poleras y casacas", href: "#ninas-poleras-casacas" },
                { label: "Jeans", href: "#ninas-jeans" },
                { label: "Conjuntos", href: "#ninas-conjuntos" },
              ]}
            />

            <MenuDropdown
              label="Deportiva"
              open={openMenu === "deportiva"}
              onClick={() => toggleMenu("deportiva")}
              close={() => setOpenMenu(null)}
              items={[
                { label: "Blusas", href: "#deportiva-blusas" },
                { label: "Pantalones y Pantalonetas", href: "#deportiva-pantalones" },
              ]}
            />

            <MenuDropdown
              label="Novedades"
              open={openMenu === "novedades"}
              onClick={() => toggleMenu("novedades")}
              close={() => setOpenMenu(null)}
              items={[
                { label: "Peluches", href: "#novedades-peluches" },
                { label: "Llaveros", href: "#novedades-llaveros" },
              ]}
            />

            <a href="#maquillaje" className="hover:text-pink-600">Maquillaje</a>
            <a href="#perfumes" className="hover:text-pink-600">Perfumes</a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-3xl text-pink-600 flex items-center gap-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="text-xl">🎄</span> ☰
          </button>
        </div>

        {/* --- MOBILE MENU CORREGIDO --- */}
        {/* Agregamos 'absolute top-full left-0 w-full' para que flote sobre el contenido */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t shadow-2xl px-6 py-6 lg:hidden z-50 flex flex-col max-h-[80vh] overflow-y-auto">
            <div className="space-y-6 text-lg font-semibold">
              
              {/* Chicas */}
              <div>
                <div className="font-bold text-pink-700 mb-2">Chicas</div>
                <div className="ml-4 space-y-2 text-base text-gray-700">
                  <a href="#chicas-jeans" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Jeans</a>
                  <a href="#chicas-faldas-shorts" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Faldas y Shorts</a>
                  <a href="#chicas-pantalones" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Pantalones</a>
                  <a href="#chicas-blusas" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Blusas</a>
                  {/* Corregí este href, antes decía #chicas-casacas */}
                  <a href="#chicas-casacas-poleras" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Casacas y Poleras</a>
                </div>
              </div>

              {/* Niñas */}
              <div>
                <div className="font-bold text-pink-700 mb-2">Niñas</div>
                <div className="ml-4 space-y-2 text-base text-gray-700">
                  <a href="#ninas-poleras-casacas" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Poleras y Casacas</a>
                  <a href="#ninas-jeans" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Jeans</a>
                  <a href="#ninas-conjuntos" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Conjuntos</a>
                </div>
              </div>

              {/* Deportiva */}
              <div>
                <div className="font-bold text-pink-700 mb-2">Deportiva</div>
                <div className="ml-4 space-y-2 text-base text-gray-700">
                  <a href="#deportiva-blusas" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Blusas</a>
                  <a href="#deportiva-pantalones" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Pantalones y Pantalonetas</a>
                </div>
              </div>

              {/* Novedades */}
              <div>
                <div className="font-bold text-pink-700 mb-2">Novedades</div>
                <div className="ml-4 space-y-2 text-base text-gray-700">
                  <a href="#novedades-peluches" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Peluches</a>
                  <a href="#novedades-llaveros" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600">Llaveros</a>
                </div>
              </div>

              {/* Otros */}
              <a href="#maquillaje" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600 text-pink-700">Maquillaje</a>
              <a href="#perfumes" onClick={() => setMobileOpen(false)} className="block hover:text-pink-600 text-pink-700">Perfumes</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

/* ---------- DROPDOWN ---------- */
function MenuDropdown({ label, open, onClick, close, items }) {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="flex items-center gap-1 hover:text-pink-600 transition-colors"
      >
        {label}
        <span className="text-xs">{open ? "❄️" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-md border border-pink-200 z-50">
          {items.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
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