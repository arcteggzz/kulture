const routePaths = {
  SPLASHPAGE: "/",
  LANDINGPAGE: "/home",
  UPLOADPAGE: "/upload",
  SIGNUPPAGE: "/signup",
  USERPROFILEPAGE: "/dashboard",
  SEARCHPAGE: "/search",
  LOGINCATCHPAGE: "/login-required",
  CARTPAGE: "/preview-cart",
  BUYBEATSPAGE: "/market",
  VERIFYPAYMENT: "/verify-payment",
  USERPROFILEPAGEROUTES: {
    OVERVIEW: "/dashboard/overview",
    PRODUCER: {
      ALL_BEATS_PRODUCED: "/dashboard/producer-all-beats",
      TOP_BEATS: "/dashboard/producer-top-beats",
      OVERVIEW: "/dashboard/producer-overview",
    },
    ARTISTE: {
      PURCHASED_BEATS: "/dashboard/artiste-all-beats",
      FAVORITES: "/dashboard/artiste-favorites",
      OVERVIEW: "/dashboard/artiste-overview",
    },
  },
};

export default routePaths;
