import { create } from 'zustand';

const useMacbookStore = create((set) => ({
    color: '#adb5bd',
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: '#adb5bd', scale: 0.08 }),
}))

export default useMacbookStore;