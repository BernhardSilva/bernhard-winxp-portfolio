import { useEffect, useRef, useState } from 'react';

export const useResize = (initialWidth: number, initialHeight: number) => {
	// State to hold current dimensions
	const [dimensions, setDimensions] = useState({ width: initialWidth, height: initialHeight });
	// Ref to the resizable div
	const resizableDiv = useRef<HTMLDivElement>(null);
	// Ref to track which sides are being resized
	const isResizing = useRef({ right: false, bottom: false, corner: false });

	// Handle mousedown event
	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
		try {
			// Check if target is a DOM element
			if (e.target instanceof Element) {
				// Determine which side is being resized based on the className
				if (e.target.className.includes('resize-right')) {
					isResizing.current.right = true;
				} else if (e.target.className.includes('resize-bottom')) {
					isResizing.current.bottom = true;
				} else if (e.target.className.includes('resize-corner-right')) {
					isResizing.current.corner = true;
				} else if (e.target.className.includes('resize-corner-left')) {
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
		// Handle mousemove event
		const handleMouseMove = (e: MouseEvent) => {
			if (!resizableDiv.current) return;

			const { clientX, clientY } = e;

			// Update width if right side or corner is being resized
			if (isResizing.current.right || isResizing.current.corner) {
				let newWidth = Math.max(
					clientX - resizableDiv.current.offsetLeft,
					initialWidth - (initialWidth > 400 ? initialWidth * 0.7 : 0)
				);
				setDimensions((prev) => ({ ...prev, width: newWidth }));
			}

			// Update height if bottom side or corner is being resized
			if (isResizing.current.bottom || isResizing.current.corner) {
				const newHeight = Math.max(clientY - resizableDiv.current.offsetTop, initialHeight - initialHeight * 0.8);
				setDimensions((prev) => ({ ...prev, height: newHeight }));
			}

			e.stopPropagation();
			e.preventDefault();
		};

		// Reset isResizing on mouseup
		const handleMouseUp = () => {
			isResizing.current.right = false;
			isResizing.current.bottom = false;
			isResizing.current.corner = false;
		};

		// Add event listeners
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);

		// Cleanup function to remove event listeners
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [initialHeight, initialWidth]);

	// Return necessary values for the component
	return { handleMouseDown, resizableDiv, dimensions };
};
