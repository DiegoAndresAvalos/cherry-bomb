"use client";
import { useCart } from "@/components/CartContext";
import { useState } from "react";

export default function SelectedProductsModal() {
  const { selectedProducts, removeProduct, clearCart } = useCart();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  if (selectedProducts.length === 0) return null;

  // Construye el mensaje y abre WhatsApp con la lista de deseos
  const sendWhatsApp = () => {
    const productList = selectedProducts
      .map((p) => `• ${p.name} - S/${p.price}${p.size ? ` (Talla ${p.size})` : ""}`)
      .join("\n");

    const finalMessage = `
Hola, estoy interesado en los siguientes productos:

${productList}

Mensaje adicional:
${message}
    `;

    const phone = "51934529189";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, "_blank");

    clearCart();
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-rose-400 text-rose-950 px-5 py-4 rounded-full shadow-lg z-50 hover:bg-rose-500 transition font-semibold flex items-center gap-3 text-base"
        aria-label={`Ver carrito con ${selectedProducts.length} productos`}
      >
        🛒 <span className="font-bold">{selectedProducts.length}</span>
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md sm:max-w-lg p-6 space-y-4 relative shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold transition-colors"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            {/* ENCABEZADO Y EXPLICACIÓN */}
            <div>
              <h2 className="text-xl font-bold text-gray-800">Tu Lista de Deseos ✨</h2>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Aquí tienes los productos que te gustaron. Al enviarnos esta lista por WhatsApp, podremos <strong>confirmarte el stock, coordinar el envío o resolver cualquier duda</strong> antes de tu compra. ¡Sin compromiso!</p>
            </div>

            {/* LISTA DE PRODUCTOS */}
            <ul className="space-y-3 max-h-60 overflow-auto bg-rose-50/60 p-4 rounded-lg border border-rose-100">
              {selectedProducts.map((p) => (
                <li key={p.id} className="flex justify-between items-start text-sm text-gray-700 py-2 border-b border-gray-100 last:border-0">
                  <div className="flex-1 pr-2">
                    <span className="font-semibold block text-gray-800">{p.name}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-rose-500 font-medium">S/{p.price}</span>
                      {p.size && <span className="text-gray-500 text-xs bg-white px-2 py-0.5 rounded border border-rose-100">Talla {p.size}</span>}
                    </div>
                  </div>
                  <button
                    onClick={() => removeProduct(p.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    aria-label={`Remover ${p.name}`}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            {/* BOTÓN VACIAR (Ahora más discreto) */}
            {selectedProducts.length > 0 && (
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    clearCart();
                    setOpen(false);
                  }}
                  className="text-xs text-rose-500 hover:text-rose-600 hover:underline transition"
                >
                  Vaciar toda la lista
                </button>
              </div>
            )}

            {/* INPUT MENSAJE */}
            <div>
              <label htmlFor="msg" className="block text-xs font-semibold text-gray-700 mb-1 ml-1">
                ¿Alguna pregunta adicional? (Opcional)
              </label>
              <textarea
                id="msg"
                placeholder="Ej: ¿Hacen envíos a Lima? ¿Tienen más colores?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none placeholder-gray-400 bg-gray-50 focus:bg-white transition-all"
                rows={2}
              />
            </div>

            {/* BOTÓN ENVIAR */}
            <button
              onClick={sendWhatsApp}
              className="w-full bg-emerald-400 text-emerald-950 py-3.5 rounded-lg hover:bg-emerald-500 font-semibold transition text-base shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              disabled={selectedProducts.length === 0}
            >
              <span>Consultar por WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-900">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}