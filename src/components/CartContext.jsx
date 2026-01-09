"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const CART_STORAGE_KEY = "cherry-bomb-cart";

export function CartProvider({ children }) {
  // Lista simple de productos (sin cantidades)
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // CARGAR datos desde localStorage al montar el componente
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        setSelectedProducts(parsed);
      }
    } catch (error) {
      console.error("Error al cargar el carrito desde localStorage:", error);
    }
    setIsHydrated(true);
  }, []);

  // GUARDAR datos en localStorage cada vez que cambia el carrito
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(selectedProducts));
      } catch (error) {
        console.error("Error al guardar el carrito en localStorage:", error);
      }
    }
  }, [selectedProducts, isHydrated]);

  /**
   * Agrega un producto a la lista si no existe.
   * Evita duplicados.
   */
  const addProduct = (product) => {
    setSelectedProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev; // Ya existe, no hace nada
      return [...prev, product]; // Agrega el nuevo producto
    });
  };

  /**
   * Elimina un producto de la lista por ID
   */
  const removeProduct = (productId) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  /**
   * Resetea el carrito completo
   */
  const clearCart = () => {
    setSelectedProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        selectedProducts,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
