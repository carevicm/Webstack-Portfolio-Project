const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  productionBrowserSourceMaps: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' http://books.google.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; connect-src 'self' https://www.googleapis.com https://jsonplaceholder.typicode.com;",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [];
  },

  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};

module.exports = nextConfig;
