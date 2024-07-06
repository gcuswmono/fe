/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/mono_fe' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/mono_fe/' : '',
};

export default nextConfig;
