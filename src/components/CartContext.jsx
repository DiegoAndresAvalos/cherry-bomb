"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const CART_STORAGE_KEY = "cherry-bomb-cart";

export function CartProvider({ children }) {
  // Estructura: [{ product: {...}, quantity: 1 }, ...]
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
   * Agrega un producto al carrito.
   * Si ya existe, incrementa su cantidad en 1.
   * Si no existe, lo agrega con quantity: 1.
   */
  const addProduct = (product) => {
    setSelectedProducts((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      
      if (existingIndex !== -1) {
        // Ya existe: incrementar cantidad
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      } else {
        // No existe: agregar nuevo
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  /**
   * Incrementa la cantidad de un producto específico
   */
  const increaseQuantity = (productId) => {
    setSelectedProducts((prev) => {
      return prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  /**
   * Decrementa la cantidad de un producto.
   * Si llega a 0, lo elimina del carrito.
   */
  const decreaseQuantity = (productId) => {
    setSelectedProducts((prev) => {
      return prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  /**
   * Elimina completamente un producto del carrito (sin importar cantidad)
   */
  const removeProduct = (productId) => {
    setSelectedProducts((prev) => prev.filter((item) => item.product.id !== productId));
  };

  /**
   * Resetea el carrito completo
   */
  const clearCart = () => {
    setSelectedProducts([]);
  };

  /**
   * Verifica si un producto está en el carrito
   */
  const isInCart = (productId) => {
    return selectedProducts.some((item) => item.product.id === productId);
  };

  /**
   * Obtiene la cantidad de un producto específico
   */
  const getProductQuantity = (productId) => {
    const item = selectedProducts.find((item) => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  /**
   * Obtiene el total de items (suma de todas las cantidades)
   */
  const getTotalItems = () => {
    return selectedProducts.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        selectedProducts,
        addProduct,
        increaseQuantity,
        decreaseQuantity,
        removeProduct,
        clearCart,
        isInCart,
        getProductQuantity,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
