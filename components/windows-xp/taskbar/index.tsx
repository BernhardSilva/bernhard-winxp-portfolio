import { Page } from '@/types';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import Tab from './tab';
import Menu from '../menu';
import Clock from './clock';
import WindowsStartButton from './windows-start-button';

type TaskBarProps = {
	elementRef: React.RefObject<HTMLDivElement>;
	handleStartClick: () => void;
	handlePageClick: (id: string) => void;
	handlePageClose: (id: string) => void;
	pages: Page[];
	isOpenClickOutside: boolean;
};

const TaskBar = ({
	elementRef,
	handleStartClick,
	handlePageClick,
	handlePageClose,
	pages,
	isOpenClickOutside
}: TaskBarProps) => {
	const currentTime = useCurrentTime();

	return (
		<div className='fixed bottom-0 w-full p-1 flex items-center justify-between z-50 task-bar'>
			<div className='flex items-center space-x-4' ref={elementRef}>
				<WindowsStartButton handleStartClick={handleStartClick} />

				{isOpenClickOutside && <Menu pages={pages} handlePageClick={handlePageClick} />}

				<div className='flex items-center space-x-2'>
					{pages
						.filter((page) => page.isOpen)
						.map((page) => (
							<div key={page.id} onClick={() => handlePageClick(page.id)}>
								<Tab page={page} handlePageClose={handlePageClose} />
							</div>
						))}
				</div>
				<Clock className='absolute right-0 bottom-3' currentTime={currentTime} />
			</div>
		</div>
	);
};

export default TaskBar;
