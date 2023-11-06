import { Page } from '@/types';
import WindowsPage from './windows-page';

type Props = {
	pages: Page[];
	handlePageClick: (id: string) => void;
	handlePageClose: (id: string) => void;
	activePageId: string;
};

const WindowsPages = ({ pages, handlePageClick, handlePageClose, activePageId }: Props) => {
	return (
		<>
			{pages
				.filter((page) => page.isOpen)
				.map((page, index) => (
					<div key={page.id} onClick={() => handlePageClick(page.id)}>
						<WindowsPage page={page} index={index} onClose={handlePageClose} isActive={page.id === activePageId} />
					</div>
				))}
		</>
	);
};

export default WindowsPages;
