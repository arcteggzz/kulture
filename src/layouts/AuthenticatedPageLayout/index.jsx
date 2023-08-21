import { Outlet, useLocation, Navigate } from "react-router-dom";
import { routePaths } from "../../utils";

export default function AuthenticatedPageLayout() {
  const currentAccessToken = true;
  const location = useLocation();

  return (
    <>
      {currentAccessToken ? (
        <Outlet />
      ) : (
        <Navigate
          to={`${routePaths.LOGINCATCHPAGE}`}
          state={{ from: location }}
          replace
        />
      )}
    </>
  );
}
