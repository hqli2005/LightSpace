module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image domains
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
};