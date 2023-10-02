import styles from "./Navbar.module.scss";
import kulture_logo from "./images/kulture_logo.png";
import Home from "./images/home.png";
import upload from "./images/upload.png";
import cart from "./images/shopping-cart.png";
import profile from "./images/profile-circle.png";
import profileImage from "./images/profileImage.jpg";
import arrow from "./images/arrow-right.png";
import { Link, useNavigate } from "react-router-dom";
import { routePaths } from "../../utils";
// import searchIcon from "./images/search-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../../redux/features/loginModal/loginModalSlice";
import {
  selectCurrentAccessToken,
  selectCurrentUserFirstName,
  selectCurrentUserType,
  resetCredentials,
} from "../../redux/features/auth/authSlice";
import { useState } from "react";
import logout_icon from "./images/logout.png";
import { BASE_URL } from "../../utils/apiRoutePaths";
import axios from "axios";
import { LoadingScreen } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  // const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUserFirstName);
  const currentUserType = useSelector(selectCurrentUserType);
  const currentToken = useSelector(selectCurrentAccessToken);

  const [dropDownNavOpen, setDropDownNavOpen] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const openLoginModalHandler = () => {
    dispatch(openLoginModal());
  };

  const handleLogout = () => {
    setLogoutLoading(true);

    axios
      .post(`${BASE_URL}/signout`, null, null)
      .then((response) => {
        console.log(response);
        setLogoutLoading(false);
        toast.success(`Sign out Successful. Routing to Home.`, {
          autoClose: 1400,
        });
        const from = routePaths.LANDINGPAGE;

        navigate(from, { replace: true });
        dispatch(resetCredentials());

        // setTimeout(() => {
        //   const from = routePaths.LANDINGPAGE;

        //   navigate(from, { replace: true });
        // }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setLogoutLoading(false);
        toast.success(`Sign out failed.`, {
          autoClose: 2400,
        });
      });
  };

  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.dFlex}>
          <div className={styles.left_side}>
            <Link to={routePaths.LANDINGPAGE}>
              <img src={kulture_logo} alt="" className={styles.logo} />
            </Link>
            {/* Search bar goes inside the div below */}
            {/* {pathname !== `${routePaths.LANDINGPAGE}` ? (
              <div>
                <input
                  className={styles.input_container}
                  placeholder="Search"
                />
                <button className={styles.searchIcon}>
                  <img src={searchIcon} />
                </button>
              </div>
            ) : (
              <></>
            )} */}
          </div>

          <div className={styles.links}>
            <div className={styles.linkBtn}>
              <img src={Home} alt="" />
              <Link className={styles.link} to={routePaths.LANDINGPAGE}>
                Home
              </Link>
            </div>
            <div className={styles.linkBtn}>
              <img src={cart} alt="" />
              <Link className={styles.link} to={routePaths.CARTPAGE}>
                Cart
              </Link>
            </div>
            {!currentUserType ? (
              <></>
            ) : (
              <>
                <div className={styles.linkBtn}>
                  <img src={upload} alt="" />

                  {currentUserType === "producer" ? (
                    <Link className={styles.link} to={routePaths.UPLOADPAGE}>
                      Upload
                    </Link>
                  ) : (
                    <Link className={styles.link} to={routePaths.BUYBEATSPAGE}>
                      Buy Beats
                    </Link>
                  )}
                </div>
              </>
            )}
            <div className={styles.linkBtn}>
              {currentUserType ? <img src={profile} alt="" /> : <></>}

              {currentUserType === "producer" ? (
                <Link
                  className={styles.link}
                  to={routePaths.USERPROFILEPAGEROUTES.PRODUCER.OVERVIEW}
                >
                  Profile
                </Link>
              ) : currentUserType === "artiste" ? (
                <Link
                  className={styles.link}
                  to={routePaths.USERPROFILEPAGEROUTES.ARTISTE.OVERVIEW}
                >
                  Profile
                </Link>
              ) : (
                <></>
              )}
            </div>
            {!currentToken ? (
              <div className={styles.signContainer}>
                <button
                  onClick={() => openLoginModalHandler()}
                  className={styles.signin}
                >
                  Signin
                </button>

                <Link className={styles.signup} to={routePaths.SIGNUPPAGE}>
                  Sign up
                </Link>
              </div>
            ) : (
              <div
                className={styles.login}
                onClick={() =>
                  setDropDownNavOpen((dropDownNavOpen) => !dropDownNavOpen)
                }
              >
                <img
                  src={profileImage}
                  alt="Profile Image"
                  className={styles.profileImage}
                />
                <p>Hi, {currentUser}</p>
                <img src={arrow} alt="Profile Image" />

                {dropDownNavOpen ? (
                  <>
                    <button
                      className={styles.DropDownNavOpen_container}
                      onClick={handleLogout}
                    >
                      <img src={logout_icon} alt="" />
                      <p className={styles.button_text}>Logout</p>
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {logoutLoading ? <LoadingScreen loading={logoutLoading} /> : <></>}
      <ToastContainer />
    </>
  );
}
