"use client";
import { useEffect } from "react";

/**
 * Componente Toast - Notificación visual temporal
 * @param {string} message - Mensaje a mostrar
 * @param {boolean} isVisible - Controla la visibilidad
 * @param {function} onClose - Callback cuando se cierra el toast
 */
export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // Se oculta después de 2 segundos
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] animate-slideDown">
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold">
        <span className="text-lg">🍒</span>
        <span>{message}</span>
      </div>
    </div>
  );
}
