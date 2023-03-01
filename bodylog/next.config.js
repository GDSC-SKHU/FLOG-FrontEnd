/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 새로고침 시  css 날라감 방지
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/join',
        destination: `http://bodylog1.duckdns.org/join`,
      },
      {
        source: '/api/login',
        destination: `http://bodylog1.duckdns.org/login`,
      },
    ];
  },
};

module.exports = nextConfig;
