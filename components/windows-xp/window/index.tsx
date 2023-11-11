import { PageState } from '@/stores/page-store';
import WindowsPage from './windows-page';

type Props = {
	pages: PageState[];
};

const WindowsPages = ({ pages }: Props) => {
	return (
		<>
			{pages
				.filter((page) => page.isOpen)
				.map((page, index) => (
					<WindowsPage key={page.id} page={page} index={index} />
				))}
		</>
	);
};

export default WindowsPages;
