import { useClickOutside } from '@/hooks/useClickOuside';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import { PageState } from '@/stores/page-store';
import Menu from '../menu';
import Clock from './clock';
import Tab from './tab';
import WindowsStartButton from './windows-start-button';

type TaskBarProps = {
	pages: PageState[] | undefined;
};

const TaskBar = ({ pages }: TaskBarProps) => {
	const currentTime = useCurrentTime();

	const { elementRef, isOpenClickOutside, setIsOpenClickOutside } = useClickOutside(false);
	const handleStartClick = () => {
		setIsOpenClickOutside(!isOpenClickOutside);
	};

	return (
		<div className='fixed bottom-0 w-full p-1 flex items-center justify-between z-50 task-bar' ref={elementRef}>
			<div className='flex items-center' ref={elementRef}>
				<WindowsStartButton handleStartClick={handleStartClick} />

				{isOpenClickOutside && <Menu pages={pages} />}

				<div className='flex items-center space-x-1 ml-2'>
					{pages
						?.filter((page) => page.isOpen)
						.map((page) => (
							<Tab key={page.id} page={page} />
						))}
				</div>
				<Clock className='absolute right-0 bottom-3' currentTime={currentTime} />
			</div>
		</div>
	);
};

export default TaskBar;
