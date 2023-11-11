import React, { ReactNode } from 'react';

type SectionsProps = React.HTMLAttributes<HTMLDivElement> & {
	component: ReactNode;
	id: string;
};

const Section = ({ id, component, ...props }: SectionsProps) => {
	return (
		<section id={id} {...props}>
			<div className='text-center p-10 h-full'>{component}</div>
		</section>
	);
};

export default Section;
