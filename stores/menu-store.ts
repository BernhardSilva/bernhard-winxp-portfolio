import { create } from 'zustand';
import { useRef } from 'react';

type MenuState = {
	isOpenClickOutside: boolean;
	setIsOpenClickOutside: (value: boolean) => void;
	handleStartClick: () => void;
};

export const useMenuStore = create<MenuState>((set) => ({
	isOpenClickOutside: false,
	setIsOpenClickOutside: (value) => set({ isOpenClickOutside: value }),
	handleStartClick: () => set((state) => ({ isOpenClickOutside: !state.isOpenClickOutside }))
}));
