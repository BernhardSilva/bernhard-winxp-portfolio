import { useState } from 'react';

const Cv = () => {
	const [pdfUrl, _] = useState('/pdf/bernhard-silva-cv.pdf');

	const handleExport = () => {
		const link = document.createElement('a');
		link.href = pdfUrl;
		link.download = 'Bernhard Silva CV-EN.pdf';
		link.click();
	};

	return (
		<div className='h-full w-full text-white flex items-center justify-center'>
			<div className='h-full w-full flex gap-5 flex-wrap justify-center'>
				<button
					onClick={handleExport}
					className='px-5 py-2 rounded-md text-white
                bg-red-600 hover:scale-105
                transition duration-300 ease-in-out'
				>
					Export PDF
				</button>
				<iframe src={pdfUrl} width={'100%'} height='100%' style={{ border: 'none' }} className='h-full w-full'></iframe>
			</div>
		</div>
	);
};

export default Cv;
