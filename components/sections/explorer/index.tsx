import WebView from '@/components/windows-xp/window/web-view-page';

type Props = {};

const Explorer = (props: Props) => {
	return <WebView className='rounded-xl' src='https://www.youtube.com/' width='100%' height='100%' />;
};

export default Explorer;
