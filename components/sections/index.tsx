import React, { ReactNode } from 'react';

type SectionsProps = React.HTMLAttributes<HTMLDivElement> & {
	component: ReactNode;
	id: string;
};

const Section = ({ id, component, ...props }: SectionsProps) => {
	const noPadding = id === 'explorer' || id === 'contact';
	return (
		<section id={id} {...props} className={`text-center ${!noPadding && 'p-5'} h-full w-full overflow-auto`}>
			{component}
		</section>
	);
};

export default Section;
