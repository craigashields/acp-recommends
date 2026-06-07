/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
  // webpack: (config) => {
  //   // Exclude SVGs from the default file loader
  //   const fileLoaderRule = config.module.rules.find((rule) =>
  //     rule.test?.test?.(".svg")
  //   );
  //   if (fileLoaderRule) {
  //     fileLoaderRule.exclude = /\.svg$/i;
  //   }

  //   // Use SVGR for SVGs
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: [
  //       {
  //         loader: "@svgr/webpack",
  //         options: {
  //           svgo: true,
  //           titleProp: true,
  //           ref: true,
  //         },
  //       },
  //     ],
  //   });

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
