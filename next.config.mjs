/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure that the app works in the existing environment
  transpilePackages: ['lucide-react', 'recharts'],
};

export default nextConfig;
