/** @type {import('next').NextConfig} */
const nextConfig = {

	transpilePackages: ['three'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**'
			}
		]
	}
};

module.exports = nextConfig;
