import create from 'zustand';

type Page = {
	id: string;
	title: string;
	isOpen: boolean;
	isMaximized: boolean;
	isMinimized: boolean;
	isFocused: boolean;
	x: number;
	y: number;
	width: number;
	height: number;
};

type Store = {
	pages: Page[];
	activePageId: string;
	addPage: (page: Page) => void;
	removePage: (pageId: string) => void;
	activatePage: (pageId: string) => void;
	maximizePage: (pageId: string) => void;
	minimizePage: (pageId: string) => void;
	focusPage: (pageId: string) => void;
	unfocusPage: (pageId: string) => void;
	movePage: (pageId: string, x: number, y: number) => void;
	resizePage: (pageId: string, width: number, height: number) => void;
};

const useStore = create<Store>((set) => ({
	pages: [],
	activePageId: '',
	addPage: (page) =>
		set((state) => ({
			pages: [...state.pages, page],
			activePageId: page.id
		})),
	removePage: (pageId) =>
		set((state) => ({
			pages: state.pages.filter((page) => page.id !== pageId),
			activePageId: state.activePageId === pageId ? state.pages[0]?.id || '' : state.activePageId
		})),
	activatePage: (pageId) => set({ activePageId: pageId }),
	maximizePage: (pageId) =>
		set((state) => ({
			pages: state.pages.map((page) => (page.id === pageId ? { ...page, isMaximized: true } : page))
		})),
	minimizePage: (pageId) =>
		set((state) => ({
			pages: state.pages.map((page) => (page.id === pageId ? { ...page, isMinimized: true } : page))
		})),
	focusPage: (pageId) =>
		set((state) => ({
			pages: state.pages.map((page) => (page.id === pageId ? { ...page, isFocused: true } : page))
		})),
	unfocusPage: (pageId) =>
		set((state) => ({
			pages: state.pages.map((page) => (page.id === pageId ? { ...page, isFocused: false } : page))
		})),
	movePage: (pageId, x, y) =>
		set((state) => ({
			pages: state.pages.map((page) => (page.id === pageId ? { ...page, x, y } : page))
		})),
	resizePage: (pageId, width, height) =>
		set((state) => ({
			pages: state.pages.map((page) => (page.id === pageId ? { ...page, width, height } : page))
		}))
}));

export default useStore;
