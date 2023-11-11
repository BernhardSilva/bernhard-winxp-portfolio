import WebView from '@/components/windows-xp/window/web-view-page';

type Props = {};

const Explorer = (props: Props) => {
	return (
		<div className='h-full w-full flex justify-center place-items-center'>
			<WebView className='rounded-xl' src='https://google.com/search?igu=1' width='100%' height='100%' />
		</div>
	);
};

export default Explorer;
