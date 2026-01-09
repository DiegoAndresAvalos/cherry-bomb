import Image from "next/image";
import { useCart } from "@/components/CartContext";
import { useState, useEffect } from "react";
import Toast from "@/components/Toast";

export default function ProductCard({ product }) {
  // Control de carrito simple (lista de deseos)
  const { addProduct, removeProduct, selectedProducts } = useCart();
  const isSelected = selectedProducts.some((p) => p.id === product.id);
  
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const hasImage = product.image && product.image.trim() !== "";
  const inStock = product.inStock !== false; // Por defecto true si no está definido

  // Maneja agregar/quitar del carrito con feedback visual
  const handleToggleCart = (e) => {
    e.stopPropagation();
    if (!inStock) return;
    
    if (isSelected) {
      removeProduct(product.id); // Quita completamente
    } else {
      addProduct(product); // Agrega a la lista
      setShowToast(true); // Muestra notificación
    }
  };

  // Maneja el clic en la imagen para abrir modal
  const handleImageClick = () => {
    if (hasImage) {
      setShowModal(true);
    }
  };

  // Maneja eventos de teclado para accesibilidad (Enter o Espacio)
  const handleImageKeyDown = (e) => {
    if (hasImage && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      {/* Toast de notificación */}
      <Toast 
        message="¡Agregado al carrito! 🍒" 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />

      <div className="bg-white border border-pink-200 rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition w-64 sm:w-72 shrink-0">
        {/* Contenedor de imagen con accesibilidad mejorada */}
        <div
          className="relative w-full h-72 overflow-hidden rounded-lg flex items-center justify-center bg-gray-100"
          onClick={handleImageClick}
          onKeyDown={handleImageKeyDown}
          role={hasImage ? "button" : undefined}
          tabIndex={hasImage ? 0 : undefined}
          aria-label={hasImage ? `Ver imagen ampliada de ${product.name}` : undefined}
          style={{ cursor: hasImage ? 'pointer' : 'default' }}
        >
          {hasImage ? (
            <>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={`object-cover ${!inStock ? 'opacity-75' : ''}`}
              />
              {!inStock && (
                <div className="absolute top-8 -right-12 bg-red-600 text-white font-bold py-2 px-16 transform rotate-45 shadow-lg z-10">
                  AGOTADO
                </div>
              )}
            </>
          ) : (
            <div className="text-gray-400 text-center px-4">
              <span className="block text-2xl mb-2">📷</span>
              <span className="text-sm">Sin imagen</span>
            </div>
          )}
        </div>

        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="text-pink-600 font-medium">S/{product.price}</p>
        {product.size && (
          <p className="text-xs text-pink-500">Talla: {product.size}</p>
        )}
        
        {/* Indicador de stock */}
        <div className="flex items-center gap-2">
          {inStock ? (
            <span className="text-xs text-green-600 font-medium flex items-center gap-1">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              En Stock
            </span>
          ) : (
            <span className="text-xs text-red-600 font-medium flex items-center gap-1">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Sin Stock
            </span>
          )}
        </div>

        <button
          onClick={handleToggleCart}
          disabled={!inStock}
          className={`mt-auto rounded-md py-3 text-sm font-medium transition ${
            !inStock
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : isSelected
              ? "bg-gray-400 hover:bg-gray-500 text-gray-800"
              : "bg-rose-600 hover:bg-rose-700 text-white"
          }`}
        >
          {!inStock ? "No Disponible" : isSelected ? "Quitar" : "Consultar"}
        </button>
      </div>

      {/* Modal de imagen ampliada */}
      {showModal && hasImage && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black flex items-center justify-center p-6 sm:p-12 sm:pt-24"
          style={{ zIndex: 999999 }}
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${product.name}`}
        >
          {/* Contenedor de imagen con tamaño controlado */}
          <div 
            className="relative bg-white rounded-lg shadow-2xl p-3 sm:p-6 w-full max-w-2xl sm:max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón X para cerrar */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-600 hover:text-rose-600 transition bg-gray-100 hover:bg-rose-100 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg z-50"
              aria-label="Cerrar imagen"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            <div className="flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="object-contain w-full h-auto max-h-[55vh] sm:max-h-[60vh]"
                priority
              />
            </div>
            {/* Nombre del producto debajo de la imagen */}
            <p className="text-center mt-3 sm:mt-4 text-gray-800 font-semibold text-sm sm:text-base">
              {product.name}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
