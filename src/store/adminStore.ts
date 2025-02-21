import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "../types/user";
import { Product } from "../types/products";

interface AdminStore {
  users: User[];
  products: Product[];
  setUsers: (users: User[]) => void;
  setProducts: (products: Product[]) => void;
}

export const userStoreApi: StateCreator<AdminStore> = (set) => ({
  users: [],
  products: [],
  setUsers: (users: User[]) => {
    set({ users: users });
  },
  setProducts: (products: Product[]) => {
    set({ products: products });
  },
});

export const adminStore = create<AdminStore>()(
  devtools(persist(userStoreApi, { name: "admin-store" }))
);
