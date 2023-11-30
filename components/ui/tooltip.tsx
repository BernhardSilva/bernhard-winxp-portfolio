import React, { useState } from 'react';

type Props = {
	children: React.ReactNode;
	text: string;
};

const Tooltip = ({ children, text }: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<>
			<div
				className='relative flex items-center justify-center'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{children}

				<div
					className={`absolute bottom-full mb-2 w-32 px-2 text-center py-2 
				  bg-slate-950 text-white rounded-md
					transform transition-all duration-300 ease-in-out pointer-events-none
    				${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'}`}
				>
					{text}
				</div>
			</div>
		</>
	);
};

export default Tooltip;
