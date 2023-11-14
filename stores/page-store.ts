import { pagesData } from '@/app/pages-data';
import { Page } from '@/types';
import { create } from 'zustand';

export type PageState = Page & {
	isOpen: boolean;
	isMinimized: boolean;
	isNewPage?: boolean;
};

type Store = {
	pages: PageState[];
	activePageId: string | null;
	openedPages: string[];
};

type Actions = {
	setPages: (pages: PageState[]) => void;
	setActivePageId: (id: string) => void;
	setActivePreviousPage: (id: string) => void;
	openPage: (id: string) => void;
	closePage: (id: string) => void;
	toggleMinimizePage: (id: string) => void;
	addNewPage: (page: PageState) => void;
};
export const usePageStore = create<Store & Actions>((set) => ({
	pages: pagesData.map((page) => ({
		...page,
		isOpen: false,
		isMaximized: false,
		isMinimized: false,
		isMobile: false
	})),
	openedPages: [],
	setPages: (pages: PageState[]) => set({ pages }),
	activePageId: null,
	openPage: (id: string) =>
		set((state) => ({
			...state,
			openedPages: [...state.openedPages, id],
			activePageId: id,
			pages: state.pages.map((page) => (page.id === id ? { ...page, isOpen: true } : page))
		})),
	closePage: (id: string) =>
		set((state) => ({
			...state,
			pages: state.pages.map((page) => (page.id === id ? { ...page, isOpen: false } : page))
		})),
	setActivePageId: (id: string) =>
		set((state) => ({
			...state,
			activePageId: id
		})),
	toggleMinimizePage: (id: string) =>
		set((state) => ({
			...state,
			pages: state.pages.map((page) => (page.id === id ? { ...page, isMinimized: !page.isMinimized } : page))
		})),
	setActivePreviousPage: (id: string) =>
		set((state) => {
			// Remove id of the closed page from openedPages
			const newOpenedPages = state.openedPages.filter((pageId) => pageId !== id);
			// Get id of the new active page (the last one in openedPages)
			const newActivePageId = newOpenedPages[newOpenedPages.length - 1];
			return {
				...state,
				openedPages: newOpenedPages,
				activePageId: newActivePageId || null
			};
		}),
	addNewPage: (page: PageState) =>
		set((state) => {
			return {
				...state,
				pages: [...state.pages, { ...page }],
				activePageId: page.id,
				openedPages: [...state.openedPages, page.id]
			};
		})
}));
