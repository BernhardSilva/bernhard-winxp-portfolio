import { Page } from '@/types';
import MenuItem from './menu-item';
import Image from 'next/image';
import { mockUser } from '@/mock/mock-data';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useTheme } from '@/hooks/useTheme';

type MenuProps = {
	handlePageClick: (id: string) => void;
	pages: Page[];
};

const Menu = ({ pages, handlePageClick }: MenuProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className='w-full max-w-md bg-white rounded-xl shadow-md absolute bottom-11 left-0 border-2 border-blue-600 rounded-b-none text-shadow'>
			<div
				className='pl-2 py-5 text-white rounded-t-md
			bg-gradient-to-b from-[#003dd7] via-[#06f]  to-[#0997ff]
			flex items-center justify-start space-x-3'
			>
				<Image
					src={mockUser.profileImage}
					width={80}
					height={80}
					alt='profile-image'
					className='rounded-lg border-2 border-l-blue-300'
				/>
				<h1 className='text-2xl font-bold'>{mockUser.name}</h1>
			</div>
			<ul className='p-5 rounded-md grid grid-cols-2'>
				{pages.map((page) => (
					<MenuItem key={page.id} page={page} handleClick={handlePageClick} />
				))}
			</ul>
			<div
				className='px-10 py-5 text-white rounded-b-none
			bg-gradient-to-b from-[#0997ff] via-[#06f] to-[#003dd7]'
			>
				<div onClick={toggleTheme} className='flex place-items-center justify-end'>
					<Icon
						icon={theme === 'dark' ? 'fa-solid:moon' : 'fa-solid:sun'}
						height={25}
						width={25}
						className={`mr-1 border-2 p-1 rounded-md hover:cursor-pointer ${theme === 'dark' ? 'text-slate-200' : 'text-yellow-500'}`}
					/>
					<p className='text-sm'>Theme</p>
				</div>
			</div>
		</div>
	);
};

export default Menu;
