import { create } from 'zustand';

type Store = {
	isMobile: boolean;
};

type Actions = {
	setIsMobile: (isMobile: boolean) => void;
};

export const useWindowsStore = create<Store & Actions>((set) => ({
	isMobile: false,
	setIsMobile: (isMobile: boolean) => set({ isMobile })
}));
