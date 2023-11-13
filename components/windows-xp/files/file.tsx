import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { Icon, IconifyIcon } from '@iconify/react/dist/iconify.js';
import { useEffect, useRef, useState } from 'react';

type File = {
	element: string;
	text: any;
	icon: any;
	color?: any;
	className?: string;
	size?: number;
	initialPosition: { x: number; y: number };
	onOpen: () => void | undefined;
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
	const { position, onMouseDownDrag } = useDragAndDrop(dragAndDropValues);
	const [hideOnMobile, setHideOnMobile] = useState('');

	const handleDoubleClick = (e: any) => {
		e.stopPropagation();
		file.onOpen();
	};

	useEffect(() => {
		const hidenIcons = ['portfolio', 'projects', 'contact', 'intro', 'services'];
		if (hidenIcons.includes(file.element))
			setHideOnMobile('hidden md:flex pointer-events-none md:pointer-events-auto');
	}, [file]);

	return (
		<div onMouseDown={onMouseDownDrag} onDoubleClick={handleDoubleClick}>
			<div
				className={`absolute flex flex-col items-center bg-blue-500 bg-opacity-30
				hover:bg-opacity-60 rounded-lg shadow-xl p-1 w-[100px] ${file.element} ${hideOnMobile}`}
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
