/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/fe' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/fe/' : '',
    output: 'export',
};

export default nextConfig;