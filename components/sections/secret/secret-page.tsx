import WebView from '@/components/windows/window/web-view-page';
import React from 'react';

const SecretPage = () => {
	return (
		<section id='secret' className='grid place-items-center'>
			<div style={{ width: '100%', height: '100%' }}>
				<iframe
					width='100%' // Fill parent's width
					height='100%' // Fill parent's height
					src='https://www.youtube.com/embed/MkSYX0N07CQ'
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
				<div style={{ width: '100%', height: '100%' }}>
					<h1>My previous Portfolio</h1>
					<WebView src='https://bernhard.vercel.app/' width='100%' height='600' />
				</div>
			</div>
		</section>
	);
};

export default SecretPage;
