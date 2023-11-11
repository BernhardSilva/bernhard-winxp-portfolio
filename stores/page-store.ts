import { pagesData } from '@/app/pages-data';
import { Page } from '@/types';
import { create } from 'zustand';

export type PageState = Page & {
	isOpen: boolean;
	isMaximized: boolean;
	isMinimized: boolean;
};

type Store = {
	pages: PageState[];
	setPages: (pages: PageState[]) => void;
	activePageId: string | null;
	setActivePageId: (id: string) => void;
	openedPages: string[];
	openPage: (id: string) => void;
	closePage: (id: string) => void;
	maximizePage: (id: string) => void;
	toggleMinimizePage: (id: string) => void;
	addSecretPage: (page: PageState) => void;
};

export const usePageStore = create<Store>((set) => ({
	pages: pagesData.map((page) => ({
		...page,
		isOpen: false,
		isMaximized: false,
		isMinimized: false
	})),
	openedPages: [],
	setPages: (pages: PageState[]) => set({ pages }),
	activePageId: null,
	openPage: (id: string) =>
		set((state) => ({
			...state,
			openedPages: [...state.openedPages, id],
			pages: state.pages.map((page) => (page.id === id ? { ...page, isOpen: true } : page))
		})),
	closePage: (id: string) =>
		set((state) => {
			// Remove id of the closed page from openedPages
			const newOpenedPages = state.openedPages.filter((pageId) => pageId !== id);
			// Get id of the new active page (the last one in openedPages)
			const newActivePageId = newOpenedPages[newOpenedPages.length - 1];
			return {
				...state,
				pages: state.pages.map((page) => (page.id === id ? { ...page, isOpen: false } : page)),
				openedPages: newOpenedPages,
				activePageId: newActivePageId || null
			};
		}),
	setActivePageId: (id: string) =>
		set((state) => ({
			...state,
			activePageId: id
		})),
	maximizePage: (id: string) =>
		set((state) => ({
			...state,
			pages: state.pages.map((page) => (page.id === id ? { ...page, isMaximized: true } : page))
		})),
	toggleMinimizePage: (id: string) =>
		set((state) => ({
			...state,
			pages: state.pages.map((page) => (page.id === id ? { ...page, isMinimized: !page.isMinimized } : page))
		})),
	addSecretPage: (page: PageState) =>
		set((state) => {
			return {
				...state,
				pages: [...state.pages, { ...page }],
				activePageId: page.id,
				openedPages: [...state.openedPages, page.id],
			};
		})
}));
