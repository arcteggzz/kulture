export const BASE_URL = "https://kulture-api.onrender.com/api/v1";

const apiRoutePaths = {
  auth: {
    register: "/register",
    login: "/signin",
    logout: "/auth/logout",
  },
  beats: "/beats",
  producers: "/producers",
  artistes: "/artistes",
  artistesDetails: (artistesId) => {
    return `/artistes/${artistesId}`;
  },
  trendingBeats: "/trending/beats",
  trendingProducers: "/trending/producers",
  producersDetails: (producerId) => {
    return `/producers/${producerId}`;
  },
  cart: {
    getAllCartItems: "/carts/view",
    addToCart: (beatId) => {
      return `/carts/add/${beatId}`;
    },
  },
};

export default apiRoutePaths;
