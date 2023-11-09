'use client';
import { DivSectionHandler } from '@/components/ui/div-section-handler';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useResize } from '@/hooks/useResize';
import { useWindowDimensions } from '@/hooks/useWindowDimentions';
import { Page } from '@/types';
import { useCallback, useMemo, useState } from 'react';
import WindowsCloseButton from '../buttons/windows-close-button';
import WindowsMaximizeButton from '../buttons/windows-maximize-button';
import Section from '../../sections';

type WindowsPageProps = {
	page: Page;
	index: number;
	onClose: (id: string) => void;
	isActive: boolean;
};

const WindowsPage = ({ page, index, onClose, isActive }: WindowsPageProps) => {
	const { width, height } = useWindowDimensions();

	const dragDropValues = {
		element: 'drag-window',
		pageIndex: index,
		initialPosition: { x: 30, y: 30 }
	};
	const { handleMouseDown, dimensions, resizableDiv } = useResize(width, height);

	const { onMouseDownDrag, position } = useDragAndDrop(dragDropValues);

	// Add a new state variable for tracking if the window is maximized
	const [isMaximized, setIsMaximized] = useState(false);

	const windowStyle = {
		left: isMaximized ? `0px` : `${position.x + index * 20}px`,
		top: isMaximized ? `0px` : `${position.y + index * 20}px`,
		zIndex: isMaximized || isActive ? 1 : 0, // Add isMaximized to the condition
		width: isMaximized ? `100vw` : `${dimensions.width}px`,
		height: isMaximized ? `96vh` : `${dimensions.height}px`
	};

	const childDimensions = useMemo(
		() => ({
			width: isMaximized ? `100%` : `${dimensions.width - 11}px`,
			height: isMaximized ? `90vh` : `${dimensions.height - 55}px`
		}),
		[dimensions, isMaximized]
	);

	const childStyle = {
		width: childDimensions.width,
		height: childDimensions.height,
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
		<div ref={resizableDiv} className='absolute bg-[#dfdfdf] rounded-t-xl shadow-2xl window' style={windowStyle}>
			<div className='title-bar'>
				<div className='flex items-center justify-between'>
					<h2 className='ml-2 font-bold'>{page.name}</h2>
					<div className='flex gap-1'>
						{/* <ButtonMinimize minimizeHandler={setIsMinimized((prev) => !prev)} /> */}
						<WindowsMaximizeButton maximizeHandler={handleMaximize} />
						<WindowsCloseButton closeHandler={handleClose} />
					</div>
				</div>
			</div>
			<div className='flex justify-center place-items-center m-2 bg-slate-100 dark:bg-slate-900 text-black dark:text-gray-100'>
				<Section page={page} style={childStyle} />
			</div>
			<DivSectionHandler
				onDoubleClick={onDoubleClickHandler}
				className='absolute top-0 w-[94%] h-[30px] cursor-grab drag-window'
				onMouseDown={onMouseDownDrag}
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

export default WindowsPage;
