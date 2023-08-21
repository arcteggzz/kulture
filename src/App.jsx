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
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
