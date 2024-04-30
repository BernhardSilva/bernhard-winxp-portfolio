import { pagesData } from '@/app/pages-data';
import { Page } from '@/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type PageState = Page & {
	isOpen: boolean;
	isMinimized: boolean;
	isNewPage?: boolean;
};

type Store = {
	pages: PageState[];
	openedPages: string[];
	activePageId: string | null;
	previousActivePageId: string | null;
};

type Actions = {
	setPages: (pages: PageState[]) => void;
	setActivePageId: (id: string) => void;
	setActivePreviousPageId: (id: string) => void;
	openPage: (id: string) => void;
	closePage: (id: string) => void;
	toggleMinimizePage: (id: string) => void;
	addNewPage: (page: PageState) => void;
};

export const usePageStore = create<Store & Actions>()(
	persist(
		(set, get) => ({
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
				set((state: Store) => {
					// Check if the id is already in openedPages
					const x = 1;
					const isAlreadyOpen = state.openedPages.includes(id);

					// If the id is not already in openedPages, add it
					const newOpenedPages = isAlreadyOpen ? state.openedPages : [...state.openedPages, id];

					return {
						...state,
						openedPages: newOpenedPages,
						activePageId: id,
						pages: state.pages.map((page) => (page.id === id ? { ...page, isOpen: true } : page))
					};
				}),
			previousActivePageId: null,
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
			setActivePreviousPageId: (id: string) =>
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
			toggleMinimizePage: (id: string) =>
				set((state) => ({
					...state,
					pages: state.pages.map((page) => (page.id === id ? { ...page, isMinimized: !page.isMinimized } : page))
				})),
			addNewPage: (page) =>
				set((state) => {
					return {
						...state,
						pages: [...state.pages, { ...page }],
						activePageId: page.id,
						openedPages: [...state.openedPages, page.id]
					};
				})
		}),
		{
			name: 'page-storage',
			storage: createJSONStorage(() => localStorage),
			// Adjusted partialize function to return a complete Store object
			partialize: (state) => ({
				openedPages: state.openedPages,
				activePageId: state.activePageId,
				previousActivePageId: state.previousActivePageId
			})
		}
	)
);
