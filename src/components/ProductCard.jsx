import Image from "next/image";
import { useCart } from "@/components/CartContext";
import { useState, useEffect } from "react";

export default function ProductCard({ product }) {
  // Control de carrito: alta y baja del mismo producto
  const { addProduct, removeProduct, selectedProducts } = useCart();
  const isSelected = selectedProducts.some((p) => p.id === product.id);
  const [showModal, setShowModal] = useState(false);

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

  // Alterna entre agregar y desagregar evitando propagar el clic a la tarjeta
  const handleToggleCart = (e) => {
    e.stopPropagation(); // Evita clics accidentales si el botón está dentro de otro elemento clicable
    if (!inStock) return; // No hace nada si no hay stock
    
    if (isSelected) {
      removeProduct(product.id); // Si ya está, lo quita
    } else {
      addProduct(product); // Si no está, lo agrega
    }
  };

  return (
    <>
      <div className="bg-white border border-pink-200 rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition w-64 sm:w-72 shrink-0">
        <div
          className="relative w-full h-72 overflow-hidden rounded-lg flex items-center justify-center cursor-pointer bg-gray-100"
          onClick={() => hasImage && setShowModal(true)}
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

      {showModal && hasImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 sm:p-8"
          onClick={() => setShowModal(false)}
        >
          <div className="relative w-full max-w-4xl h-full max-h-[90vh] flex items-center justify-center">
            {/* Botón X para cerrar - visible en todas las pantallas */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition bg-rose-600 hover:bg-rose-700 rounded-full w-12 h-12 flex items-center justify-center z-[10000] shadow-xl"
              aria-label="Cerrar imagen"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            {/* Contenedor de imagen con tamaño controlado */}
            <div 
              className="relative bg-white rounded-lg shadow-2xl p-4 sm:p-6 max-w-full max-h-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center max-h-[75vh] sm:max-h-[80vh]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="object-contain max-h-[70vh] sm:max-h-[75vh] w-auto"
                  priority
                />
              </div>
              {/* Nombre del producto debajo de la imagen */}
              <p className="text-center mt-4 text-gray-800 font-semibold text-sm sm:text-base">
                {product.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}