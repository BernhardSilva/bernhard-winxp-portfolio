// Page.js
import React from 'react';
import Draggable from 'react-draggable';

type WindowPageProps = {
	page: any;
	index: number;
	onClose: (id: string) => void;
};

const WindowPage = ({ page, index, onClose }: WindowPageProps) => (
	<Draggable
		bounds={{
			top: -40,
			left: -40,
			right: window.innerWidth - window.innerWidth * 0.69, // Adjust based on your element width
			bottom: window.innerHeight - window.innerHeight * 0.76 // Adjust based on your element height
		}}
	>
		<div
			id='window-page'
			className='absolute top-10 left-10 bg-[#dfdfdf] rounded-t-xl shadow-2xl w-2/3 h-2/3 window'
			style={{ transform: `translate(${index * 5}%, ${index * 5}%)` }}
		>
			<div className='title-bar'>
				<div className='flex items-center justify-between'>
					<h2 className='ml-2 font-bold'>{page.name}</h2>
					<button
						onClick={() => onClose(page.id)}
						className='w-6 h-6 bg-red-500 hover:bg-red-600 active:bg-red-700 border-[1px] border-white rounded text-white text-sm font-bold'
					>
						X
					</button>
				</div>
				<div className='mt-5'>{page.component}</div>
			</div>
		</div>
	</Draggable>
);

export default WindowPage;
