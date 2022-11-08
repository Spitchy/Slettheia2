const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfiguration = {
  target: "serverless", //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
};
module.exports = withPlugins([optimizedImages], nextConfiguration);

// module.exports = withPlugins({
//   apiKeys: {
//     baseUrl: 'https://apitest.vipps.no/',
//     client_id: 'e1cdb4ca-3482-4641-8c44-944aa25de8e9',
//     client_secret: 'salXTPyO7-xL5umODr5TuavraJo=',
//     MerchantSerialNumber: '260417',
//     SubscriptionKey: 'f5b56ee3eabf4019977b990596c87b81'
//   },
// });

// fra stackoverflow for fiks av fs ?
{
  /*
module.exports = {
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
  },
};
*/
}
