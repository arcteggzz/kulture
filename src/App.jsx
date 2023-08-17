// import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routePaths } from "./utils/";

//Layouts
import {
  PublicPageLayout,
  AuthenticatedPageLayout,
  CredentialsPageLayout,
} from "./layouts";

//Utilities
// import PersistLogin from "./utils/PersistLogin.jsx";

//Pages
import { SplashPage, LandingPage, SignUpPage, UploadPage, SearchPage } from "./pages";

//lazyLoading for pages
// const UploadPage = lazy(() => import("./pages"));

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={`${routePaths.SPLASHPAGE}`} element={<SplashPage />} />
          <Route path={`${routePaths.SEARCHPAGE}`} element={<SearchPage />} />
          {/* Authentication routes */}
          <Route element={<CredentialsPageLayout />}>
            <Route path={`${routePaths.SIGNUPPAGE}`} element={<SignUpPage />} />
          </Route>

          {/* public routes */}
          <Route element={<PublicPageLayout />}>
            <Route
              path={`${routePaths.LANDINGPAGE}`}
              element={<LandingPage />}
            />
          </Route>

          {/* private routes */}
          <Route element={<AuthenticatedPageLayout />}>
            <Route path={`${routePaths.UPLOADPAGE}`} element={<UploadPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
