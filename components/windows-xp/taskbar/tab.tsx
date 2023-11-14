import { PageState, usePageStore } from '@/stores/page-store';
import { Icon } from '@iconify/react/dist/iconify.js';
import WindowsCloseButton from '../buttons/windows-close-button';

type TabProps = {
	page: PageState;
};

const Tab = ({ page }: TabProps) => {
	const { openPage, closePage, toggleMinimizePage, activePageId, setActivePreviousPage } = usePageStore(
		(state) => state
	);

	const handleClick = (id: string) => {
		openPage(id);
		if (page.isMinimized) toggleMinimizePage(id);
	};

	const closeHandler = () => {
		closePage(page.id);
		setActivePreviousPage(page.id);
	};

	return (
		<div
			key={page.id}
			onClick={() => handleClick(page.id)}
			className={`bg-blue-500 hover:bg-blue-400
			p-2 rounded-md shadow-lg hover:cursor-pointer
			flex place-items-center justify-evenly gap-2 lg:min-w-[100px]
			${page.id !== activePageId && 'bg-blue-600 hover:bg-blue-500'}
			hidden md:flex`}
		>
			<Icon icon={page.icon} height={20} width={20} className={`${'hidden md:flex lg:hidden'}`} />
			<span className='hidden lg:flex'>{page.name}</span>
			<WindowsCloseButton closeHandler={closeHandler} />
		</div>
	);
};

export default Tab;
