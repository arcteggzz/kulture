export const BASE_URL = "https://kulture-api.onrender.com/api/v1";

const apiRoutePaths = {
  auth: {
    register: "/register",
    login: "/signin",
    logout: "/auth/logout",
  },
  trendingBeats: "/trending/beats",
  trendingProducers: "/trending/producers",
};

export default apiRoutePaths;
