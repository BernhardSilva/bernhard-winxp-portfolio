import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { Icon } from '@iconify/react/dist/iconify.js';

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
	const drogAndDropValues = {
		element: file.element,
		initialPosition: file.initialPosition
	};
	const { position, onMouseDownDrag } = useDragAndDrop(drogAndDropValues);

	const handleDoubleClick = (e: any) => {
		e.stopPropagation();
		file.onOpen();
	};

	return (
		<div 
		onMouseDown={onMouseDownDrag}
		onDoubleClick={handleDoubleClick}>
			<div
				className={`absolute flex flex-col items-center bg-blue-500 bg-opacity-30
				hover:bg-opacity-60 rounded-lg shadow-xl p-1 w-[100px] ${file.element}`}
				style={{ left: position.x, top: position.y }}
			>
				<Icon icon={file.icon} height={file.size} width={file.size} color={file.color} className={file.className} />

				<span>{file.text}</span>
			</div>
		</div>
	);
};

export default File;
