import { useEffect, useRef, useState } from 'react';

type UseResizeProps = {
	initialWidth: number;
	initialHeight: number;
};

export const useResize = ({ initialHeight, initialWidth }: UseResizeProps) => {
	const [dimensions, setDimensions] = useState({ width: initialWidth, height: initialHeight });
	const resizableDiv = useRef<HTMLDivElement>(null);
	const isResizing = useRef({ right: false, bottom: false, corner: false });

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
		try {
			if (e.target instanceof Element) {
				if (e.target.className.includes('resize-right')) {
					isResizing.current.right = true;
				} else if (e.target.className.includes('resize-bottom')) {
					isResizing.current.bottom = true;
				} else if (e.target.className.includes('resize-corner')) {
					isResizing.current.corner = true;
				}
			}
		} catch (error) {
			console.error(error);
		} finally {
			e.stopPropagation();
			e.preventDefault();
		}
	};

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (
				resizableDiv.current &&
				(isResizing.current.right || isResizing.current.bottom || isResizing.current.corner)
			) {
				let newWidth = e.clientX - resizableDiv.current.getBoundingClientRect().left;
				let newHeight = e.clientY - resizableDiv.current.getBoundingClientRect().top;
				newWidth = newWidth < initialWidth - 200 ? initialWidth - 200 : newWidth;
				newHeight = newHeight < initialHeight - 200 ? initialHeight - 200 : newHeight;
				setDimensions({ width: newWidth, height: newHeight });
				e.stopPropagation();
				e.preventDefault();
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
};
