import create from "zustand";

export const useCartStore = create((set) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  return {
    cart: storedCart,
    addToCart: (id) => {
      set((state) => {
        const newCart = [...state.cart, id];

        localStorage.setItem("cart", JSON.stringify(newCart));
        return { cart: newCart };
      });
    },
    removeFromCart: (id) => {
      set((state) => {
        const newCart = state.cart.filter((item) => item !== id);

        localStorage.setItem("cart", JSON.stringify(newCart));
        return { cart: newCart };
      });
    },
  };
});
