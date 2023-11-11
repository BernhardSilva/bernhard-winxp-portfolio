const WebView = ({ ...props }: React.IframeHTMLAttributes<HTMLIFrameElement>) => {
	return <iframe style={{ border: 0 }} allowFullScreen {...props} />;
};

export default WebView;
