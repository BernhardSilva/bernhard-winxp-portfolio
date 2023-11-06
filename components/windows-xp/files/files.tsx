import File from "./file";


const Files = () => {
	const openFile = () => {
		alert('⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️');
	};

	const openEplorer = () => {
		alert('explorer opened');
	};

	const fileList = [
		{
			element: 'secret',
			text: "Dont' open",
			icon: 'bx:file',
			color: '#ffffff',
			size: 50,
			initialPosition: { x: 40, y: 700 },
			onOpen: () => openFile()
		},
		{
			element: 'explorer',
			text: 'Explorer',
			icon: 'fa-brands:internet-explorer',
			color: '#3381f7',
			size: 50,
			initialPosition: { x: 40, y: 800 },
			onOpen: () => openEplorer()
		}
	];

	return (
		<div className='cursor-pointer'>
			{fileList.map((file) => {
				return <File key={file.element} file={file} />;
			})}
		</div>
	);
};

export default Files;
