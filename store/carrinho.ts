import { defineStore } from "pinia"
import type { ICart } from "~/types/carrinho";

export const useCarrinhoStore = defineStore('useCarrinho', {
    state: () => ({
        cart: [] as ICart[],
    }),
    getters: {
        getCart: (state) => state.cart,
    },
    actions: {
        setCart(value: ICart) {
            this.cart = [...this.cart, value];
        },
        removeCart(value: ICart) {
            const index = this.cart.indexOf(value);
            console.log("index", index);
            // if (index > -1) {
            //     this.cart.splice(index, 1);
            // }
        }
    },
    persist: true
});