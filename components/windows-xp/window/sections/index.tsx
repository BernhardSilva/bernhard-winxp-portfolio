import { Page } from '@/types';
import React from 'react';

type SectionsProps = React.HTMLAttributes<HTMLDivElement> & {
	page: Page;
};

const Section = ({ page, ...props }: SectionsProps) => {
	return (
		<section id={page.id} {...props}>
			<div className={`text-center p-10`}>{page.component}</div>
		</section>
	);
};

export default Section;
