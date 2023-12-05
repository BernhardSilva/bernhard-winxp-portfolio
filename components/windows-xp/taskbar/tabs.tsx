import React from 'react';
import Tab from './tab';
import { PageState } from '@/stores/page-store';

type Props = {
	pages: PageState[] | undefined;
};

const Tabs = ({ pages }: Props) => {
	return (
		<>
			{pages?.map((page) => (
				<Tab key={page.id} page={page} className='justify-evenly' nameClassName='sm:block md:hidden'/>
			))}
		</>
	);
};

export default Tabs;
