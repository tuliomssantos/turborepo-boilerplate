module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  transpilePackages: [
    '@acme/auth',
    '@acme/button',
    '@acme/database',
    '@acme/error'
  ],
};
