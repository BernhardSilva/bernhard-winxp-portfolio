import Section from '@/components/sections';
import { DivSectionHandler } from '@/components/ui/div-section-handler';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useResize } from '@/hooks/useResize';
import { useWindowDimensions } from '@/hooks/useWindowDimentions';
import { PageState, usePageStore } from '@/stores/page-store';
import { useCallback, useMemo, useState } from 'react';
import WindowsCloseButton from '../buttons/windows-close-button';
import WindowsMaximizeButton from '../buttons/windows-maximize-button';
import WindowsMinimizeButton from '../buttons/windows-minimize-button';

type WindowsPageProps = {
	page: PageState;
	index: number;
};

const WindowsPage = ({ page, index }: WindowsPageProps) => {
	const { openPage, closePage } = usePageStore();
	const { setActivePageId, toggleMinimizePage, activePageId } = usePageStore((state) => state);
	const { width, height } = useWindowDimensions();

	const dragDropValues = {
		element: 'drag-window',
		pageIndex: index,
		initialPosition: { x: 30, y: 30 },
		index: index
	};
	const { handleMouseDown, dimensions, resizableDiv } = useResize(width, height);
	const { onMouseDownDrag, position } = useDragAndDrop(dragDropValues);

	// Add a new state variable for tracking if the window is maximized
	const [isMaximized, setIsMaximized] = useState(false);

	const windowStyle = {
		left: isMaximized ? `0px` : `${position.x + index * 20}px`,
		top: isMaximized ? `0px` : `${position.y + index * 20}px`,
		zIndex: activePageId === page.id ? 1 : 0,
		width: isMaximized ? `100vw` : `${dimensions.width}px`,
		height: isMaximized ? `96vh` : `${dimensions.height}px`
	};

	const childDimensions = useMemo(
		() => ({
			width: isMaximized ? `100%` : `${dimensions.width - 11}px`,
			height: isMaximized ? `91vh` : `${dimensions.height - 45}px`
		}),
		[dimensions, isMaximized]
	);

	const childStyle = {
		width: childDimensions.width,
		height: childDimensions.height,
		overflow: 'auto'
	};

	const hanldeDoubleClick = useCallback(() => setIsMaximized((prev) => !prev), []);
	const handleMaximize = useCallback(() => setIsMaximized((prev) => !prev), []);

	const handleClick = (id: string) => {
		setActivePageId(id);
		openPage(id);
	};

	const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isMaximized) {
			onMouseDownDrag(e);
			setActivePageId(page.id);
		}
	};

	const hasMounted = useHasMounted();

	if (!hasMounted) {
		return null;
	}

	return (
		<div
			onClick={() => handleClick(page.id)}
			ref={resizableDiv}
			className={`absolute bg-[#dfdfdf] rounded-t-xl shadow-2xl window ${
				activePageId !== page.id && !isMaximized && 'brightness-50'
			} ${page.isMinimized && 'hidden'}`}
			style={windowStyle}
		>
			<div className='title-bar'>
				<div className='flex items-center justify-between'>
					<div className='w-full cursor-grab drag-window' onMouseDown={handleDrag} onDoubleClick={hanldeDoubleClick}>
						<h2 className='ml-2 font-bold'>{page.name}</h2>
					</div>
					<div className='flex gap-1'>
						<WindowsMinimizeButton minimizeHandler={() => toggleMinimizePage(page.id)} />
						<WindowsMaximizeButton maximizeHandler={handleMaximize} />
						<WindowsCloseButton closeHandler={() => closePage(page.id)} />
					</div>
				</div>
			</div>
			<div className='m-2 bg-slate-100 dark:bg-slate-900 text-black dark:text-gray-100'>
				<Section page={page} style={childStyle} />
			</div>
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
