import { Outlet, useLocation, Navigate } from "react-router-dom";
import { routePaths } from "../../utils";
import { useSelector } from "react-redux";
import { selectCurrentAccessToken } from "../../redux/features/auth/authSlice";

export default function AuthenticatedPageLayout() {
  const currentAccessToken = useSelector(selectCurrentAccessToken);
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
