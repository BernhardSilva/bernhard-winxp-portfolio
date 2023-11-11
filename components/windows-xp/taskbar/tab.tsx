import { PageState, usePageStore } from '@/stores/page-store';
import WindowsCloseButton from '../buttons/windows-close-button';

type TabProps = {
	page: PageState;
};

const Tab = ({ page }: TabProps) => {
	const { openPage, setActivePageId, closePage, toggleMinimizePage, activePageId } = usePageStore((state) => state);

	const handleClick = (id: string) => {
		openPage(id);
		setActivePageId(id);
		if (page.isMinimized) toggleMinimizePage(id);
	};

	return (
		<div
			key={page.id}
			onClick={() => handleClick(page.id)}
			className={`bg-blue-500 hover:bg-blue-400
			p-2 rounded-md shadow-lg hover:cursor-pointer
			flex place-items-center justify-evenly gap-2 min-w-[100px]
			${page.id !== activePageId && 'bg-blue-600 hover:bg-blue-500'}`}
		>
			<span>{page.name}</span>
			<WindowsCloseButton closeHandler={() => closePage(page.id)} />
		</div>
	);
};

export default Tab;
