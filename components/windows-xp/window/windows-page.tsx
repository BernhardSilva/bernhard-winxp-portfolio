import Section from '@/components/sections';
import { DivSectionHandler } from '@/components/ui/div-section-handler';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useResize } from '@/hooks/useResize';
import { useWindowDimensions } from '@/hooks/useWindowDimentions';
import { PageState, usePageStore } from '@/stores/page-store';
import { useWindowsStore } from '@/stores/windows-store';
import { HTMLAttributes, useCallback, useEffect, useState } from 'react';
import WindowsCloseButton from '../buttons/windows-close-button';
import WindowsMaximizeButton from '../buttons/windows-maximize-button';
import WindowsMinimizeButton from '../buttons/windows-minimize-button';

type WindowsPageProps = HTMLAttributes<HTMLDivElement> & {
	page: PageState;
	index: number;
	className?: string;
};

const WindowsPage = ({ page, index, className }: WindowsPageProps) => {
	const { openPage, closePage, openedPages } = usePageStore();
	const { setActivePageId, toggleMinimizePage, activePageId, setActivePreviousPage } = usePageStore((state) => state);
	const { isMobile } = useWindowsStore((state) => state);
	const { width, height } = useWindowDimensions();
	const hasMounted = useHasMounted();
	const [animation, setAnimation] = useState(false);

	const { handleMouseDown, dimensions, resizableDiv } = useResize(width, height);

	const dragDropValues = {
		initialPosition: { x: 20 + index * 20, y: 20 + index * 20 },
		elementRef: resizableDiv
	};
	const { position, onMouseDownDrag } = useDragAndDrop(dragDropValues);

	// Add a new state variable for tracking if the window is maximized
	const [isMaximized, setIsMaximized] = useState(false);

	useEffect(() => {
		setIsMaximized(isMobile);
	}, [isMobile]);

	const positionStyle = isMaximized ? { left: '0px', top: '0px' } : { left: `${position.x}px`, top: `${position.y}px` };

	const windowStyle = {
		...positionStyle,
		zIndex: activePageId === page.id ? 1 : 0,
		width: isMaximized ? `100%` : `${dimensions.width}px`,
		height: isMaximized ? `100%` : `${dimensions.height}px`
	};

	const handleMaximize = () => {
		setAnimation(true);
		setActivePageId(page.id);
		setIsMaximized((prev) => !prev);
	};

	const handleClose = useCallback(() => {
		setAnimation(false);
		setActivePreviousPage(page.id);

		if (isMobile) {
			openedPages.forEach((pageId) => {
				if (pageId !== page.id) {
					closePage(pageId);
				}
			});
		}

		closePage(page.id);
	}, [page.id, closePage, setActivePreviousPage, isMobile, openedPages]);

	const handleMinimize = useCallback(() => {
		setAnimation(true);
		setActivePreviousPage(page.id);
		toggleMinimizePage(page.id);
	}, [page.id, toggleMinimizePage, setActivePreviousPage]);

	const handleClick = (id: string) => {
		openPage(id);
	};

	const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
		setAnimation(false);
		if (!isMaximized) {
			onMouseDownDrag(e);
			setActivePageId(page.id);
		}
	};

	const handleResize = (e: React.MouseEvent<HTMLDivElement>) => {
		setAnimation(false);
		handleMouseDown(e);
	};

	return hasMounted ? (
		<div
			onClick={() => handleClick(page.id)}
			ref={resizableDiv}
			className={`absolute flex flex-col bg-[#dfdfdf] rounded-t-xl shadow-2xl 
			${animation && 'transition-all duration-300 ease-in-out'}
			${page.isMinimized && animation ? 'transform scale-0 origin-bottom' : 'transform scale-100 origin-top'}
			window ${activePageId !== page.id && 'brightness-50'} ${className}`}
			style={windowStyle}
		>
			<div className='title-bar'>
				<div className='flex items-center justify-between'>
					<div className='w-full cursor-grab drag-window' onMouseDown={handleDrag} onDoubleClick={handleMaximize}>
						<h2 className='ml-2 font-bold'>{page.name}</h2>
					</div>
					<div className='flex gap-1'>
						{!isMobile && (
							<>
								<WindowsMinimizeButton minimizeHandler={handleMinimize} />
								<WindowsMaximizeButton maximizeHandler={handleMaximize} />
							</>
						)}
						<WindowsCloseButton closeHandler={handleClose} />
					</div>
				</div>
			</div>
			<div className='relative bg-slate-100 m-2 dark:bg-slate-900 text-black dark:text-gray-100 flex-grow overflow-auto'>
				<Section component={page.component} id={page.id} />
			</div>
			<DivSectionHandler
				className='absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize resize-right'
				onMouseDown={handleResize}
			/>
			<DivSectionHandler
				className='absolute left-0 bottom-0 right-0 h-2 cursor-ns-resize resize-bottom'
				onMouseDown={handleResize}
			/>
			<DivSectionHandler
				className='absolute bottom-0 right-0 h-2 w-2 cursor-nwse-resize resize-corner-right'
				onMouseDown={handleResize}
			/>
		</div>
	) : null;
};

export default WindowsPage;
