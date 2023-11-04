'use client';
import { DivSectionHandler } from '@/components/ui/div-section-handler';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useResize } from '@/hooks/useResize';
import { useWindowDimensions } from '@/hooks/useWindowDimentions';
import { useCallback, useMemo, useState } from 'react'; // Add useState import
import ButtonCloseWindows from '../buttons/button-close-windows';
import ButtonMaximize from '../buttons/button-maximize-windows';

type PageWindowsProps = {
	page: any;
	index: number;
	onClose: (id: string) => void;
	isActive: boolean;
};

const dragDropValues = {
	element: 'drag-window',
	initialPosition: { x: 30, y: 30 }
};

const PageWindows = ({ page, index, onClose, isActive }: PageWindowsProps) => {
	const { width, height } = useWindowDimensions();

	const { handleMouseDown, dimensions, resizableDiv } = useResize(width, height);

	const { onMouseDownDrag: dragWindow, pos: posWindow } = useDragAndDrop(dragDropValues);

	// Add a new state variable for tracking if the window is maximized
	const [isMaximized, setIsMaximized] = useState(false);

	const style = {
		left: isMaximized ? `0px` : `${posWindow.x + index * 20}px`,
		top: isMaximized ? `0px` : `${posWindow.y + index * 20}px`,
		zIndex: isMaximized || isActive ? 1 : 0, // Add isMaximized to the condition
		width: isMaximized ? `100vw` : `${dimensions.width}px`,
		height: isMaximized ? `95vh` : `${dimensions.height}px`
	};

	const childDimensions = useMemo(
		() => ({
			width: isMaximized ? `100vw` : `${dimensions.width - 11}px`,
			height: isMaximized ? `95vw` : `${dimensions.height - 55}px`
		}),
		[dimensions, isMaximized]
	);

	const childStyle = {
		width: isMaximized ? `99vw` : childDimensions.width,
		height: isMaximized ? `89vh` : childDimensions.height,
		overflow: 'auto'
	};

	const onDoubleClickHandler = useCallback(() => setIsMaximized((prev) => !prev), []);

	const handleMaximize = useCallback(() => setIsMaximized((prev) => !prev), []);

	const handleClose = useCallback(() => onClose(page.id), [onClose, page.id]);

	const hasMounted = useHasMounted();

	if (!hasMounted) {
		return null;
	}

	return (
		<div ref={resizableDiv} className='absolute bg-[#dfdfdf] rounded-t-xl shadow-2xl window' style={style}>
			<div className='title-bar'>
				<div className='flex items-center justify-between'>
					<h2 className='ml-2 font-bold'>{page.name}</h2>
					<div className='flex gap-1'>
						{/* <ButtonMinimize minimizeHandler={setIsMinimized((prev) => !prev)} /> */}
						<ButtonMaximize maximizeHandler={handleMaximize} />
						<ButtonCloseWindows closeHandler={handleClose} />
					</div>
				</div>
				<div className='mt-5' style={childStyle}>
					{page.component}
				</div>
			</div>
			<DivSectionHandler
				onDoubleClick={onDoubleClickHandler}
				className='absolute top-0 w-[94%] h-[30px] cursor-grab drag-window'
				onMouseDown={dragWindow}
			/>
			<DivSectionHandler
				className='absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize resize-right'
				onMouseDown={handleMouseDown}
			/>
			<DivSectionHandler
				className='absolute left-0 bottom-0 right-0 h-2 cursor-ns-resize resize-bottom'
				onMouseDown={handleMouseDown}
			/>
			<DivSectionHandler
				className='absolute bottom-0 right-0 h-2 w-2 cursor-nwse-resize resize-corner-right'
				onMouseDown={handleMouseDown}
			/>
		</div>
	);
};

export default PageWindows;
