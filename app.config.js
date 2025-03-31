import "dotenv/config";

export default {
  expo: {
    android: {
      config: {
        googleMaps: {
          API_KEY: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    },
    ios: {
      config: {
        API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
  },
};
