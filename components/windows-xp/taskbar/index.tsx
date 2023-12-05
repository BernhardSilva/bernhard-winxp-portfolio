import { useClickOutside } from '@/hooks/useClickOuside';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import { PageState } from '@/stores/page-store';
import Menu from '../menu';
import Clock from './clock';
import DropDownTabs from './dowpdown-tabs';
import Tabs from './tabs';
import WindowsStartButton from './windows-start-button';
import { useWindowsStore } from '@/stores/windows-store';

type TaskBarProps = {
	pages: PageState[] | undefined;
};

const TaskBar = ({ pages = [] }: TaskBarProps) => {
	const openedPages = pages.filter((page) => page.isOpen);
	const currentTime = useCurrentTime();
	const { isMobile } = useWindowsStore((state) => state);

	const { elementRef, isOpenClickOutside, setIsOpenClickOutside } = useClickOutside(false);
	const handleStartClick = () => {
		setIsOpenClickOutside(!isOpenClickOutside);
	};

	return (
		<div className='relative bottom-0 w-full p-1 flex items-center justify-between z-50 task-bar' ref={elementRef}>
			<div className='flex items-center' ref={elementRef}>
				<WindowsStartButton handleStartClick={handleStartClick} />

				{isOpenClickOutside && <Menu pages={pages} setIsOpenClickOutside={setIsOpenClickOutside} />}

				<div className='flex items-center space-x-1 ml-2'>
					{(!isMobile && openedPages?.filter((page) => page.isOpen).length > 1) ||
					(!isMobile && openedPages?.filter((page) => page.isOpen).length > 10) ? (
						<DropDownTabs pages={openedPages} />
					) : (
						!isMobile && <Tabs pages={openedPages} />
					)}
				</div>
				<Clock className='absolute right-0 bottom-3' currentTime={currentTime} />
			</div>
		</div>
	);
};

export default TaskBar;
