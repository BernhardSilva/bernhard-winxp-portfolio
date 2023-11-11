import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useRef } from 'react';

type File = {
	element: string;
	text: string;
	icon: string;
	color?: string;
	className?: string;
	size?: number;
	initialPosition: { x: number; y: number };
	onOpen: () => void;
};

type DesktopFileProps = {
	file: File;
};

const File = ({ file }: DesktopFileProps) => {
	const fileRef = useRef<React.RefObject<HTMLDivElement> | null>(null);
	const dragAndDropValues = {
		element: file.element,
		initialPosition: file.initialPosition,
		elementRef: fileRef.current
	};
	const { position, onMouseDownDrag, dragging, draggingOut } = useDragAndDrop(dragAndDropValues);

	const handleDoubleClick = (e: any) => {
		e.stopPropagation();
		file.onOpen();
	};

	return (
		<div onMouseDown={onMouseDownDrag} onDoubleClick={handleDoubleClick}>
			<div
				className={`absolute flex flex-col items-center bg-blue-500 bg-opacity-30
				hover:bg-opacity-60 rounded-lg shadow-xl p-1 w-[100px] ${file.element}`}
				style={{
					left: position.x,
					top: position.y
				}}
			>
				<Icon
					icon={file.icon}
					height={file.size}
					width={file.size}
					color={file.color}
					className={`transition ease-linear duration-500 ${file.className}`}
				/>

				<span>{file.text}</span>
			</div>
		</div>
	);
};

export default File;
