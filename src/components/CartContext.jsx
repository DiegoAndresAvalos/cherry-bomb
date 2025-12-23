"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Agrega solo si no existe el mismo id
  const addProduct = (product) => {
    setSelectedProducts(prev => {
      if (prev.find(p => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  // Elimina por id
  const removeProduct = (id) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== id));
  };

  // Resetea la selección completa
  const clearCart = () => setSelectedProducts([]);

  return (
    <CartContext.Provider value={{
      selectedProducts,
      addProduct,
      removeProduct,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
