import styles from "./Navbar.module.scss";
import Logo from "./image/Logo.png";
import Home from "./image/Home.png";
import upload from "./image/upload.png";
import cart from "./image/shopping-cart.png";
import profileImage from "./image/profileImage.png";
import arrow from "./image/arrow-right.png";
import { Link, useLocation } from "react-router-dom";
import { routePaths } from "../../utils";
import searchIcon from "./image/search-icon.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const login = false;

  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.dFlex}>
          <div className={styles.left_side}>
            <img src={Logo} alt="" className={styles.logo} />
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
              <Link className={styles.link}>Home</Link>
            </div>
            <div className={styles.linkBtn}>
              <img src={cart} alt="" />
              <Link className={styles.link}>Cart</Link>
            </div>
            <div className={styles.linkBtn}>
              <img src={upload} alt="" />
              <Link className={styles.link}>Upload</Link>
            </div>
            {login ? (
              <div className={styles.signContainer}>
                <Link className={styles.signin}>Signin</Link>
                <Link className={styles.signup}>Sign up</Link>
              </div>
            ) : (
              <div className={styles.login}>
                <img
                  src={profileImage}
                  alt="Profile Image"
                  className={styles.profileImage}
                />
                <p>
                 Hi, Miriam 
                </p>
                 <img
                  src={arrow}
                  alt="Profile Image"
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
