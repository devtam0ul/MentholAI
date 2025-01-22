/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add experimental features support
  experimental: {
    // Enable app directory features
    appDir: true,
  },
  // Add webpack configuration
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    });
    return config
  }
}

export default nextConfig 