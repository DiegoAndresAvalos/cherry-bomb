import Image from "next/image";
import { useCart } from "@/components/CartContext";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { addProduct, removeProduct, selectedProducts } = useCart();
  const isSelected = selectedProducts.some((p) => p.id === product.id);
  const [showModal, setShowModal] = useState(false);

  // ESTA ES LA CLAVE: Verificamos si la imagen es válida (no es un espacio vacío)
  const hasImage = product.image && product.image.trim() !== "";

  const handleToggleCart = (e) => {
    e.stopPropagation();
    if (isSelected) {
      removeProduct(product.id);
    } else {
      addProduct(product);
    }
  };

  return (
    <>
      <div className="bg-white border border-pink-200 rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition">
        <div
          className="relative w-full h-72 overflow-hidden rounded-lg flex items-center justify-center cursor-pointer bg-gray-100"
          onClick={() => hasImage && setShowModal(true)}
        >
          {/* AQUÍ USAMOS LA PROTECCIÓN */}
          {hasImage ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
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

        <button
          onClick={handleToggleCart}
          className={`mt-auto rounded-md py-3 text-sm font-medium transition text-white ${
            isSelected
              ? "bg-red-500 hover:bg-red-600"
              : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          {isSelected ? "Desagregar" : "Agregar"}
        </button>
      </div>

      {showModal && hasImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div className="max-w-lg max-h-lg p-4 bg-white rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}