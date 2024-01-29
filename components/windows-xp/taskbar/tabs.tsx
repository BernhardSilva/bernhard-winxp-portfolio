import { useWindowDimensions } from '@/hooks/useWindowDimentions';
import { PageState } from '@/stores/page-store';
import { HTMLAttributes } from 'react';
import Tab from './tab';

type Props = HTMLAttributes<HTMLDivElement> & {
	pages: PageState[] | undefined;
};

const Tabs = ({ pages, ...props }: Props) => {
	const { width } = useWindowDimensions();
	return (
		<>
			{pages?.map((page) => (
				<Tab
					key={page.id}
					page={page}
					className='justify-evenly'
					nameClassName={width < 768 ? 'hidden' : ''}
					{...props}
				/>
			))}
		</>
	);
};

export default Tabs;
