import { PageState, usePageStore } from '@/stores/page-store';
import { useWindowsStore } from '@/stores/windows-store';
import { Icon } from '@iconify/react/dist/iconify.js';

type MenuItemProps = {
	page: PageState;
	setIsOpenClickOutside: (isOpen: boolean) => void;
};

const MenuItem = ({ page, setIsOpenClickOutside }: MenuItemProps) => {
	const { openPage, closePage, openedPages, toggleMinimizePage } = usePageStore((state) => state);
	const { isMobile } = useWindowsStore((state) => state);

	const handleClick = (id: string) => {
		openPage(id);
		if (isMobile) {
			setIsOpenClickOutside(false);
			openedPages.forEach((pageId) => {
				if (pageId !== id) {
					closePage(pageId);
				}
			});
		}
		if (page.isMinimized) toggleMinimizePage(id);
	};

	return (
		<div className={`rounded-t-xl p-2`}>
			<li
				className={`p-2 text-black dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-950 rounded-md cursor-pointer`}
				onClick={() => handleClick(page.id)}
			>
				<div className={`flex justify-start place-items-center`}>
					<Icon icon={page.icon} className={`mr-2 ${page?.color}`} />
					<span className='text-lg font-semibold'>{page?.name}</span>
				</div>
			</li>
		</div>
	);
};

export default MenuItem;
