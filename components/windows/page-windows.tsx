import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { useResize } from '@/hooks/useResize';
import { useMemo, useState } from 'react'; // Add useState import
import ButtonCloseWindows from '../ui/button-close-windows';
import ButtonMaximize from '../ui/button-maximize-windows';

type PageWindowsProps = {
	page: any;
	index: number;
	onClose: (id: string) => void;
	isActive: boolean;
};

type ResizeHandleProps = {
	className: string;
	handleMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const initialDimentions = {
	initialWidth: 1024,
	initialHeight: 600
};

const PageWindows = ({ page, index, onClose, isActive }: PageWindowsProps) => {
	const { handleMouseDown, dimensions, resizableDiv } = useResize(initialDimentions);
	const { dragging, onMouseDownDrag, pos } = useDragAndDrop();

	// Add a new state variable for tracking if the window is maximized
	const [isMaximized, setIsMaximized] = useState(false);

	const childDimensions = useMemo(
		() => ({
			width: isMaximized ? `99vw` : `${dimensions.width - 11}px`,
			height: isMaximized ? `95vw` : `${dimensions.height - 55}px`
		}),
		[dimensions, isMaximized]
	);

	const style = {
		left: isMaximized ? `0px` : `${pos.x + index * 20}px`,
		top: isMaximized ? `0px` : `${pos.y + index * 20}px`,
		cursor: dragging ? 'grabbing' : 'grab',
		zIndex: isMaximized || isActive ? 1 : 0, // Add isMaximized to the condition
		width: isMaximized ? `100vw` : `${dimensions.width}px`,
		height: isMaximized ? `95vh` : `${dimensions.height}px`
	};

	const ResizeHandle = ({ className, handleMouseDown }: ResizeHandleProps) => (
		<div onMouseDown={handleMouseDown} className={`absolute ${className}`} />
	);

	return (
		<div
			onMouseDown={onMouseDownDrag}
			ref={resizableDiv}
			className='absolute bg-[#dfdfdf] rounded-t-xl shadow-2xl w-2/3 h-2/3 window'
			style={style}
		>
			<div className='title-bar'>
				<div className='flex items-center justify-between'>
					<h2 className='ml-2 font-bold'>{page.name}</h2>
					<div className='flex gap-1'>
						{/* <ButtonMinimize minimizeHandler={setIsMinimized((prev) => !prev)} /> */}
						<ButtonMaximize maximizeHandler={() => setIsMaximized((prev) => !prev)} />
						<ButtonCloseWindows closeHandler={() => onClose(page.id)} />
					</div>
				</div>
				<div
					className='mt-5'
					style={{
						width: childDimensions.width,
						height: childDimensions.height,
						overflow: 'auto'
					}}
				>
					{page.component}
				</div>
			</div>
			<ResizeHandle
				className='absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize resize-right'
				handleMouseDown={handleMouseDown}
			/>
			<ResizeHandle
				className='absolute left-0 bottom-0 right-0 h-2 cursor-ns-resize resize-bottom'
				handleMouseDown={handleMouseDown}
			/>
			<ResizeHandle
				className='absolute bottom-0 right-0 h-2 w-2 cursor-nwse-resize resize-corner-right'
				handleMouseDown={handleMouseDown}
			/>
		</div>
	);
};

export default PageWindows;
