import WebView from '@/components/windows/window/web-view-page';
import React from 'react';

const SecretPage = () => {
	return (
		<section id='secret'>
			<div className='p-5'>
				<iframe
					width='100%' // Fill parent's width
					height='600px' // Fill parent's height
					src='https://www.youtube.com/embed/MkSYX0N07CQ'
					title='YouTube video player'
					// allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
				<div className='text-center text-4xl'>
					<h1 className='my-20 text-gray-100'>Take a Look at my previous Portfolio, is kind of retro I know 🫣.</h1>
					<WebView src='https://bernhard.vercel.app/' width='100%' height='700px' />
				</div>
			</div>
		</section>
	);
};

export default SecretPage;
