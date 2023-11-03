import { MouseEvent, useEffect, useRef, useState } from 'react';

type UseResizeProps = {
	initialWidth: number;
	initialHeight: number;
};

export const useResize = ({ initialHeight, initialWidth }: UseResizeProps) => {
	const [dimensions, setDimensions] = useState({ width: initialWidth, height: initialHeight });
	const resizableDiv = useRef<HTMLDivElement>(null);
	const isResizing = useRef({ right: false, bottom: false, corner: false });

	const handleMouseDown = (e: any): void => {
		e.preventDefault();
		if (e.target instanceof Element) {
			if (e.target.className.includes('resize-right')) {
				isResizing.current.right = true;
			} else if (e.target.className.includes('resize-bottom')) {
				isResizing.current.bottom = true;
			} else if (e.target.className.includes('resize-corner')) {
				isResizing.current.corner = true;
			}
		}
	};

	useEffect(() => {
		const handleMouseMove = (e: any) => {
			if (
				resizableDiv.current &&
				(isResizing.current.right || isResizing.current.bottom || isResizing.current.corner)
			) {
				let newWidth = e.clientX - resizableDiv.current.getBoundingClientRect().left;
				let newHeight = e.clientY - resizableDiv.current.getBoundingClientRect().top;
				newWidth = newWidth < initialWidth - 200 ? initialWidth - 200 : newWidth;
				newHeight = newHeight < initialHeight - 200 ? initialHeight - 200 : newHeight;
				setDimensions({ width: newWidth, height: newHeight });
			}
		};

		const handleMouseUp = () => {
			isResizing.current.right = false;
			isResizing.current.bottom = false;
			isResizing.current.corner = false;
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [initialHeight, initialWidth]);

	return { handleMouseDown, resizableDiv, dimensions };
	// <div className="flex items-center justify-center h-screen bg-gray-800">
	//   <div
	//     ref={resizableDiv}
	//     style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
	//     className="relative bg-white"
	//   >
	//     <div
	//       onMouseDown={handleMouseDown}
	//       className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize resize-right bg-gray-500"
	//     ></div>
	//     <div
	//       onMouseDown={handleMouseDown}
	//       className="absolute left-0 bottom-0 right-0 h-2 cursor-ns-resize resize-bottom bg-gray-500"
	//     ></div>
	//   </div>
	// </div>
};
