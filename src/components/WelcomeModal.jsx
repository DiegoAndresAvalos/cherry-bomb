"use client";
import { useState, useEffect } from "react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostrar el modal cada vez que se carga la página
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Contenido */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-pink-600 mb-2">
            ¡Bienvenido a Cherry Bomb! 🍒
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          <p className="text-gray-700 text-center leading-relaxed">
            Nos alegra tenerte aquí. Si te interesa uno de nuestros productos, 
            haz clic en el botón <span className="font-semibold text-rose-600">Agregar</span> y 
            se agregará a tu canasta (que aparecerá en la parte inferior derecha) para realizar consultas 
            o solicitar más información.
          </p>

          {/* Ejemplo del botón Agregar */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-pink-100">
            <p className="text-sm text-gray-600 mb-3 font-medium">
              👉 Botón para agregar productos:
            </p>
            <button className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-md py-3 text-sm font-medium transition shadow-md">
              Agregar
            </button>
          </div>

          {/* Ejemplo del botón del carrito */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-pink-100">
            <p className="text-sm text-gray-600 mb-3 font-medium">
              🛒 Botón para ver tu canasta:
            </p>
            <div className="flex justify-center">
              <button className="bg-rose-400 text-rose-950 px-5 py-4 rounded-full shadow-lg hover:bg-rose-500 transition font-semibold flex items-center gap-3 text-base">
                🛒 <span className="font-bold">0</span>
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center italic">
            Una vez agregados los productos, puedes consultar con nosotros por WhatsApp
          </p>
        </div>

        {/* Botón de continuar */}
        <button
          onClick={handleClose}
          className="mt-6 w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-lg py-3 font-semibold transition shadow-lg"
        >
          ¡Entendido, vamos a comprar! 🎉
        </button>
      </div>
    </div>
  );
}
