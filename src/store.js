import { create } from "zustand";



export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (id) => {
        set((state) => ({cart:  [...state.cart,  id]}))
    },
    removeFromCart: (id) => {
        set((state) => ({cart : state.cart.filter((item) => item !== id)}))
    }
}))