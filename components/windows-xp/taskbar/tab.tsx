import { Page } from '@/types';
import WindowsCloseButton from '../buttons/windows-close-button';

type TabProps = {
	page: Page;
	handlePageClose: (id: string) => void;
};

const Tab = ({ page, handlePageClose }: TabProps) => {
	return (
		<div
			key={page.id}
			className={`bg-blue-500 hover:bg-blue-400 p-2 rounded-md shadow-lg hover:cursor-pointer
			flex place-items-center justify-evenly gap-2 min-w-[100px]`}
		>
			<span>{page.name}</span>
			<WindowsCloseButton closeHandler={() => handlePageClose(page.id)} />
		</div>
	);
};

export default Tab;
