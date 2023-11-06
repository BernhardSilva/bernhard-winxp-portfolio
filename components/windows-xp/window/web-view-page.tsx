type WebViewProps = React.IframeHTMLAttributes<HTMLIFrameElement> & {
	className?: string;
};

const WebView = ({ className, ...props }: WebViewProps) => {
	return <iframe className={className} style={{ border: 0 }} allowFullScreen {...props} />;
};

export default WebView;
