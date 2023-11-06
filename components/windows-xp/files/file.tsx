import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { Icon } from '@iconify/react/dist/iconify.js';

type File = {
	element: string;
	text: string;
	icon: string;
	color: string;
	size: number;
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
	const { pos, onMouseDownDrag } = useDragAndDrop(drogAndDropValues);

	const handleDoubleClick = (e: any) => {
		e.stopPropagation();
		file.onOpen();
	};

	return (
		<div onMouseDown={onMouseDownDrag} onDoubleClick={handleDoubleClick}>
			<div
				className={`absolute flex flex-col items-center bg-blue-500 bg-opacity-30 hover:bg-opacity-60 rounded-lg shadow-xl p-1 ${file.element} max-w-[100px] min-w-[100px]`}
				style={{ left: pos.x, top: pos.y }}
			>
				<Icon icon={file.icon} height={file.size} width={file.size} color={file.color} />

				<span>{file.text}</span>
			</div>
		</div>
	);
};

export default File;
