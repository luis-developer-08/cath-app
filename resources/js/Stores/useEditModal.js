import { create } from "zustand";

const useEditModalStore = create((set) => ({
    editModalIsOpen: false,
    transactionId: null,
    openEditModal: (id) => set({ editModalIsOpen: true, transactionId: id }),
    closeEditModal: () => set({ editModalIsOpen: false, transactionId: null }),
    toggleEditModal: () => set((state) => ({ editModalIsOpen: !state.isOpen })),
}));

export default useEditModalStore;
