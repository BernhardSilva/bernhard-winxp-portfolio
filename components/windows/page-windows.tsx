import Draggable from 'react-draggable';
import ButtonCloseWindows from '../ui/button-close-windows';

type PageWindowsProps = {
	page: any;
	index: number;
	onClose: (id: string) => void;
};

const PageWindows = ({ page, index, onClose }: PageWindowsProps) => {
	return (
		<Draggable handle='.title-bar'>
			<div
				id='window-page'
				className={`absolute top-10 left-10 bg-[#dfdfdf] rounded-t-xl shadow-2xl w-2/3 h-2/3 window`}
				style={{ transform: `translate(${index * 5}%, ${index * 5}%)` }}
			>
				<div className='title-bar' id='title-bar'>
					<div className='flex items-center justify-between'>
						<h2 className='ml-2 font-bold'>{page.name}</h2>
						<ButtonCloseWindows closeHandler={() => onClose(page.id)} />
					</div>
					<div className='mt-5'>{page.component}</div>
				</div>
			</div>
		</Draggable>
	);
};

export default PageWindows;
