import { defineStore } from "pinia"
import type { ICart } from "~/types/carrinho";
import type { IUser } from "~/types/user";

export const useUserStore = defineStore('useUser', {
    state: () => ({
        user: { email: '', nome: '' } as IUser,
    }),
    getters: {
        getUser: (state) => state.user,
    },
    actions: {
        setUser(value: IUser) {
            this.user = value;
        },
    },
    persist: true
});