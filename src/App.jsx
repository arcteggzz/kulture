// import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routePaths } from "./utils/";

//Layouts
import { GeneralPageLayout, AuthenticatedPageLayout } from "./layouts";

//Utilities
// import PersistLogin from "./utils/PersistLogin.jsx";

//Pages
import {
  SplashPage,
  LandingPage,
  SignUpPage,
  UploadPage,
  SearchPage,
  LoginCatchPage,
  UserProfilePage,
  CartPage,
  ArtistAllBeatsPage,
  ArtistFavoriteBeatsPage,
  ProducerAllBeatsPage,
  ProducerTopBeatsPage,
  OverviewPage,
  BeatsOffersPage,
  VerifyPaymentPage, ProducerOverviewPage,ArtistOverviewPage
} from "./pages";

//lazyLoading for pages
// const UploadPage = lazy(() => import("./pages"));

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={`${routePaths.SPLASHPAGE}`} element={<SplashPage />} />
          <Route path={`${routePaths.SIGNUPPAGE}`} element={<SignUpPage />} />
          <Route
            path={`${routePaths.LOGINCATCHPAGE}`}
            element={<LoginCatchPage />}
          />

          {/* GENERAL LAYOUT */}
          <Route element={<GeneralPageLayout />}>
            <Route
              path={`${routePaths.LANDINGPAGE}`}
              element={<LandingPage />}
            />
            <Route path={`${routePaths.SEARCHPAGE}`} element={<SearchPage />} />
            <Route
              path={`${routePaths.VERIFYPAYMENT}`}
              element={<VerifyPaymentPage />}
            />
            <Route
              path={`${routePaths.BUYBEATSPAGE}`}
              element={<BeatsOffersPage />}
            />

            {/* private routes */}
            <Route element={<AuthenticatedPageLayout />}>
              <Route
                path={`${routePaths.UPLOADPAGE}`}
                element={<UploadPage />}
              />
              <Route
                path={`${routePaths.USERPROFILEPAGE}`}
                element={<UserProfilePage />}
              />
              <Route path={`${routePaths.CARTPAGE}`} element={<CartPage />} />

              <Route element={<UserProfilePage />}>
                <Route
                  path={`${routePaths.USERPROFILEPAGEROUTES.OVERVIEW}`}
                  element={<OverviewPage />}
                />
                <Route
                  path={`${routePaths.USERPROFILEPAGEROUTES.ARTISTE.OVERVIEW}`}
                  element={<ArtistOverviewPage />}
                />
                <Route
                  path={`${routePaths.USERPROFILEPAGEROUTES.ARTISTE.PURCHASED_BEATS}`}
                  element={<ArtistAllBeatsPage />}
                />
                <Route
                  path={`${routePaths.USERPROFILEPAGEROUTES.ARTISTE.FAVORITES}`}
                  element={<ArtistFavoriteBeatsPage />}
                />
                <Route
                  path={`${routePaths.USERPROFILEPAGEROUTES.PRODUCER.OVERVIEW}`}
                  element={<ProducerOverviewPage />}
                />
                <Route
                  path={`${routePaths.USERPROFILEPAGEROUTES.PRODUCER.ALL_BEATS_PRODUCED}`}
                  element={<ProducerAllBeatsPage />}
                />
                <Route
                  path={`${routePaths.USERPROFILEPAGEROUTES.PRODUCER.TOP_BEATS}`}
                  element={<ProducerTopBeatsPage />}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
