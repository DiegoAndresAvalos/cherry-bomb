"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-black text-white pt-12 pb-8 border-t border-zinc-800">
      <div className="container mx-auto px-6 sm:px-6">
        
        {/* Bloque superior: 3 columnas responsivas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-8 mb-10">
          
          {/* Columna 1: Marca y zona de entregas */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl sm:text-3xl font-bold text-rose-300 mb-4 tracking-wider">
              CHERRY BOMB 🍒
            </h2>
            <p className="text-gray-200 text-sm sm:text-base mb-5 text-center md:text-left max-w-xs leading-relaxed">
              Tu tienda favorita de moda para chicas, niñas y accesorios únicos. Estilo y tendencia en un solo lugar.
            </p>
            <div className="flex items-center gap-2 text-gray-100 text-sm sm:text-base bg-zinc-900 px-4 py-3 rounded-lg border border-zinc-800 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 flex-shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Entregas: <strong>Asia - Mala</strong> 📍</span>
            </div>
          </div>

          {/* Columna 2: Anclas rápidas a secciones */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg sm:text-xl mb-4 text-rose-300">Explorar</h3>
            <ul className="space-y-3 text-gray-200 text-sm sm:text-base text-center md:text-left">
              {/* Estos links ahora llevan al inicio de cada sección según tu Header */}
              <li>
                <a href="/" onClick={(e) => scrollToSection(e, "chicas-jeans")} className="hover:text-rose-400 transition-colors">Ropa para Chicas</a>
              </li>
              <li>
                <a href="/" onClick={(e) => scrollToSection(e, "ninas-poleras-casacas")} className="hover:text-rose-400 transition-colors">Moda Niñas</a>
              </li>
              <li>
                <a href="/" onClick={(e) => scrollToSection(e, "deportiva-blusas")} className="hover:text-rose-400 transition-colors">Ropa Deportiva</a>
              </li>
              <li>
                <a href="/" onClick={(e) => scrollToSection(e, "novedades-peluches")} className="hover:text-rose-400 transition-colors">Novedades & Regalos</a>
              </li>
              <li>
                <a href="/" onClick={(e) => scrollToSection(e, "maquillaje")} className="hover:text-rose-400 transition-colors">Maquillaje</a>
              </li>
              <li>
                <a href="/" onClick={(e) => scrollToSection(e, "perfumes")} className="hover:text-rose-400 transition-colors">Perfumes</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg sm:text-xl mb-4 text-rose-300">Síguenos</h3>
            <p className="text-gray-200 text-sm sm:text-base mb-5">¡No te pierdas nuestras novedades!</p>
            
            <div className="flex gap-5 flex-wrap justify-center md:justify-start">
              {/* Botón Instagram */}
              <a 
                href="https://www.instagram.com/che.rrybommbb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-900 p-3 rounded-full border border-zinc-800 hover:bg-rose-100/20 text-rose-200 transition-all duration-300 group shadow-sm"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Botón TikTok */}
              <a 
                href="https://www.tiktok.com/@cherrybommbbbb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-900 p-3 rounded-full border border-zinc-800 hover:bg-rose-100/20 text-gray-100 transition-all duration-300 group shadow-sm"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-zinc-800 pt-8 mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Cherry Bomb. Todos los derechos reservados.
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Diseñado con ❤️ para ti.
          </p>
        </div>
      </div>
    </footer>
  );
}