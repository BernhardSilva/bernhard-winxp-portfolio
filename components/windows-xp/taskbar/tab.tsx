import { PageState, usePageStore } from '@/stores/page-store';
import { Icon } from '@iconify/react/dist/iconify.js';
import WindowsCloseButton from '../buttons/windows-close-button';
import { HTMLAttributes } from 'react';

type TabProps = HTMLAttributes<HTMLElement> & {
	page: PageState;
	className: string;
	nameClassName?: string;
	iconClassName?: string;
};

const Tab = ({ page, className, nameClassName, iconClassName, ...props }: TabProps) => {
	const { closePage, toggleMinimizePage, activePageId, setActivePageId, setActivePreviousPageId } = usePageStore(
		(state) => state
	);

	const handleClick = (id: string) => {
		setActivePageId(id)
		if (page.isMinimized) toggleMinimizePage(id);
	};

	const closeHandler = () => {
		closePage(page.id);
		setActivePreviousPageId(page.id);
	};

	return (
		<div
			key={page.id}
			onClick={() => handleClick(page.id)}
			className={`bg-blue-500 hover:bg-blue-400
			p-2 rounded-md shadow-lg hover:cursor-pointer
			flex place-items-center gap-3
			${page.id !== activePageId && 'bg-blue-600 hover:bg-blue-500'}
			${className}`}
			{...props}
		>
			<Icon icon={page.icon} height={20} width={20} className={iconClassName} />
			<span className={nameClassName}>{page.name}</span>
			<WindowsCloseButton closeHandler={closeHandler} />
		</div>
	);
};

export default Tab;
