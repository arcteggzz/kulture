import styles from "./Navbar.module.scss";
import Logo from "./image/Logo.png";
import Home from "./image/Home.png";
import upload from "./image/upload.png";
import cart from "./image/shopping-cart.png";
import { Link, useLocation } from "react-router-dom";
import { routePaths } from "../../utils";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.dFlex}>
          <div className={styles.left_side}>
            <img src={Logo} alt="" className={styles.logo} />
            {/* Search bar goes inside the div below */}
            {pathname !== `${routePaths.LANDINGPAGE}` ? (
              <input className={styles.input_container} />
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
            <Link className={styles.signup}>Signin</Link>
            <Link className={styles.signup}>Sign up</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
