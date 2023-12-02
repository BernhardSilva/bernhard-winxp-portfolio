import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
	const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
	if (!GA_MEASUREMENT_ID) return <></>;

	return (
		<>
			<Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);
                gtag('js', new Date());
                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                gtag('config', '${GA_MEASUREMENT_ID}',{
                    'page_path': window.location.pathname,
                });
                `
				}}
			/>
		</>
	);
};

export default GoogleAnalytics;
