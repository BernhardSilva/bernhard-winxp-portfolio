type WebViewProps = React.IframeHTMLAttributes<HTMLIFrameElement> & {
	className?: string;
};

const WebView: React.FC<WebViewProps> = ({ className, ...props }) => {
	return <iframe className={className} style={{ border: 0 }} allowFullScreen {...props} />;
};

export default WebView;
