import WebView from '@/components/windows/window/web-view-page';
import React from 'react';

const SecretPage = () => {
	return (
		<section id='secret'>
			<div className='text-center text-3xl font-bold bg-slate-100 p-5 mx-5 rounded-lg'>
				<h1 className='my-10'>
					<span className='p-2 bg-amber-300 rounded-lg shadow-xl'>Konami Code origin 🕹️</span>
				</h1>
				<div className='flex justify-center place-items-center'>
					<iframe
						className='rounded-lg shadow-xl'
						width='90%'
						height='600px'
						src='https://www.youtube.com/embed/MkSYX0N07CQ'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					/>
				</div>

				<h1 className='my-10'>
					<span className='p-2 bg-[#5050de] rounded-lg shadow-xl'>Take a Look at my previous Portfolio 🫣</span>
				</h1>
				<div className='flex justify-center place-items-center'>
					<WebView className='rounded-xl' src='https://bernhard.vercel.app/' width='90%' height='700px' />
				</div>
			</div>
		</section>
	);
};

export default SecretPage;
