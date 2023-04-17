import { create } from "zustand";

const StateStore = create((set) => ({
    total: 0,
    increase: () => set((state) => ({ total: state.total + 1 })),
    decrease: () => set((state) => ({ total: state.total - 1 })),
    remove: () => set({ total: 0 }),
}));

export default StateStore;