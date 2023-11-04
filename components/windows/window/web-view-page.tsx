type WebViewProps = {
	src: string;
	width?: string;
	height?: string;
};

const WebView = ({ src, width = '100%', height = '100%' }: WebViewProps) => {
	return <iframe src={src} width={width} height={height} style={{ border: 0 }} allowFullScreen />;
};

export default WebView;
