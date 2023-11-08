const nextConfig = {
  // Enables React's Strict Mode for detecting potential problems
  reactStrictMode: true,

  // Configuration for next/image component's default loader
  images: {
    formats: ['image/avif', 'image/webp'], // Preferred image formats for optimization
  },

  // Enables source maps for production for better error tracing
  productionBrowserSourceMaps: true,

  // Sets custom HTTP headers for your application
  async headers() {
    return [
      {
        source: '/:path*', // Matches all paths
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://books.google.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; connect-src 'self' https://www.googleapis.com https://jsonplaceholder.typicode.com;",
          },
        ],
      },
    ];
  },

  // Configure automatic redirects
  async redirects() {
    return [
      // Example redirect:
      // {
      //   source: '/old-route',
      //   destination: '/new-route',
      //   permanent: true,
      // },
    ];
  },

  // Internationalization configuration
  i18n: {
    locales: ['en', 'fr', 'es'], // Supported locales
    defaultLocale: 'en', // Default locale
  },

  // Custom Webpack configuration
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = { fs: false, ...config.resolve.fallback };
    }

    // Optionally extend webpack config here
    // Example: add external plugins, loaders

    return config;
  },

  // Additional configurations can be added here
  // Example: serverRuntimeConfig, publicRuntimeConfig, etc.
};


module.exports = nextConfig;
