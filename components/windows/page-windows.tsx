import ButtonCloseWindows from '../ui/button-close-windows';
import { useResize } from '@/hooks/useResize';

type PageWindowsProps = {
	page: any;
	index: number;
	onClose: (id: string) => void;
	isActive: boolean;
};

//TODO add breakpoints per device for full reponsiveness
const initialDimentions = {
	initialWidth: 1024,
	initialHeight: 600
};

const PageWindows = ({ page, index, onClose, isActive }: PageWindowsProps) => {
	const { handleMouseDown, dimensions, resizableDiv } = useResize(initialDimentions);
	const childDimentions = {
		width: `${dimensions.width - 11}px`,
		height: `${dimensions.height - 55}px`
	};
	return (
		<div
			onMouseDown={() => handleMouseDown}
			ref={resizableDiv}
			className='absolute bg-[#dfdfdf] rounded-t-xl shadow-2xl w-2/3 h-2/3 window'
			style={{
				left: `${index * 2}%`,
				top: `${index * 2}%`,
				zIndex: isActive ? 1 : 0,
				width: `${dimensions.width}px`,
				height: `${dimensions.height}px`
			}}
		>
			<div className='title-bar'>
				<div className='flex items-center justify-between'>
					<h2 className='ml-2 font-bold'>{page.name}</h2>
					<ButtonCloseWindows closeHandler={() => onClose(page.id)} />
				</div>
				<div
					className='mt-5'
					style={{
						width: childDimentions.width, // Add a fixed height to the div, which will trigger a vertical scroll bar
						height: childDimentions.height, // You can adjust the height as needed
						overflow: 'auto' // Enable scroll bar when content overflows
					}}
				>
					{page.component}
				</div>
			</div>
			<div
				onMouseDown={handleMouseDown}
				className='absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize resize-right'
			></div>
			<div
				onMouseDown={handleMouseDown}
				className='absolute left-0 bottom-0 right-0 h-2 cursor-ns-resize resize-bottom'
			></div>
			<div
				onMouseDown={handleMouseDown}
				className='absolute bottom-0 right-0 h-2 w-2 cursor-nwse-resize resize-corner'
			></div>
		</div>
	);
};

export default PageWindows;
