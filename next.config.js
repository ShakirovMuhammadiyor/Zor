/** @type {import('next').NextConfig} */
const advancedHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Access-Control-Allow-Origin",
    value: "*"
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 2000,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: advancedHeaders,
      },
    ];
  },
}

const withTM = require('next-transpile-modules')(['react-syntax-highlighter', 'react-plotly.js']);

module.exports = withTM(nextConfig);


// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })

// module.exports = withBundleAnalyzer(nextConfig)
