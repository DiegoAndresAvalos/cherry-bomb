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
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative w-full max-w-3xl">
            {/* Botón X para cerrar - fijo en esquina superior derecha */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-0 right-0 sm:-top-12 sm:right-0 text-white hover:text-gray-300 transition bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center z-20 shadow-lg"
              aria-label="Cerrar imagen"
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
            <div className="bg-white rounded-lg p-4 max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}