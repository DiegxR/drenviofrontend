import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "../types/user";
import { Product, specialPrice } from "../types/products";

interface AuthStore {
  user: User | null;
  products: Product[]
  specialPrices: specialPrice[]
  setUser: (user: User | null) => void;
  setProducts: (products: Product[]) => void;
  setSpecialPrices: (specialPrices: specialPrice[]) => void;
}

export const userStoreApi: StateCreator<AuthStore> = (set) => ({
  user: null,
  products: [],
  specialPrices: [],
  setProducts: (products: Product[]) => {
    set({products: products})
  },
  setUser: (user: User | null) => {
    set({ user: user });
  },
  setSpecialPrices: (specialPrices: specialPrice[]) => {
    set({ specialPrices: specialPrices });
  },
});

export const userStore = create<AuthStore>()(
  devtools(persist(userStoreApi, { name: "user-store" }))
);
