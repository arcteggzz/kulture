import styles from "./Navbar.module.scss";
import kulture_logo from "./images/kulture_logo.png";
import Home from "./images/home.png";
import upload from "./images/upload.png";
import cart from "./images/shopping-cart.png";
import profile from "./images/profile-circle.png";
import profileImage from "./images/profileImage.jpg";
import arrow from "./images/arrow-right.png";
import { Link, useLocation } from "react-router-dom";
import { routePaths } from "../../utils";
import searchIcon from "./images/search-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../../redux/features/loginModal/loginModalSlice";
import {
  selectCurrentAccessToken,
  selectCurrentUserFirstName,
  selectCurrentUserType,
} from "../../redux/features/auth/authSlice";

export default function Navbar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUserFirstName);
  const currentUserType = useSelector(selectCurrentUserType);
  const currentToken = useSelector(selectCurrentAccessToken);

  const login = currentToken;

  const openLoginModalHandler = () => {
    dispatch(openLoginModal());
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
            {pathname !== `${routePaths.LANDINGPAGE}` ? (
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
            )}
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
            {!login ? (
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
              <div className={styles.login}>
                <img
                  src={profileImage}
                  alt="Profile Image"
                  className={styles.profileImage}
                />
                <p>Hi, {currentUser}</p>
                <img src={arrow} alt="Profile Image" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
