import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useRef } from 'react';

type File = {
	element: string;
	text: any;
	icon: any;
	color?: any;
	className?: string;
	size?: number;
	onOpen: any;
};

type DesktopFileProps = {
	file: File;
};

const File = ({ file }: DesktopFileProps) => {
	const fileRef = useRef<any | null>(null);

	const dragAndDropValues = {
		element: file.element,
		initialPosition: { x: fileRef.current?.offsetLeft, y: fileRef.current?.offsetTop },
		elementRef: fileRef.current
	};
	const { position, onMouseDownDrag } = useDragAndDrop(dragAndDropValues);

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
					className={`transition ease-linear duration-500 ${file.className} ${file.color}`}
				/>

				<span>{file.text}</span>
			</div>
		</div>
	);
};

export default File;
