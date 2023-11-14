import MenuItem from './menu-item';
import Image from 'next/image';
import { mockUser } from '@/mock/mock-data';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useTheme } from '@/hooks/useTheme';
import { PageState } from '@/stores/page-store';

type MenuProps = {
	pages: PageState[] | undefined;
};

const Menu = ({ pages }: MenuProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div
			className='w-full max-w-md bg-white dark:bg-slate-900 rounded-xl shadow-md absolute bottom-11 left-0
			border-2 border-blue-600 rounded-b-none text-shadow transition duration-500'
		>
			<div
				className='pl-2 py-5 text-white rounded-t-md
				border-b-2 border-blue-400
				bg-gradient-to-t from-[#0997ff] via-[#06f] to-[#003dd7]
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
			<ul className='p-4 rounded-md grid grid-cols-2'>
				{pages?.map((page) => (
					<MenuItem key={page.id} page={page} />
				))}
			</ul>
			<div
				className='px-10 py-5 text-white rounded-b-none border-t-2 border-blue-400
				bg-gradient-to-b from-[#0997ff] via-[#06f] to-[#003dd7]'
			>
				<div className='flex place-items-center justify-end'>
					<Icon
						onClick={toggleTheme}
						icon={theme === 'dark' ? 'fa-solid:moon' : 'fa-solid:sun'}
						height={25}
						width={25}
						className='mr-1 border-2 p-1 bg-red-500 rounded-md hover:cursor-pointer text-white'
					/>
					<p className='text-sm'>Theme</p>
				</div>
			</div>
		</div>
	);
};

export default Menu;
