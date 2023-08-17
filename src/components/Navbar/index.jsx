import styles from "./Navbar.module.scss";
import Logo from "./image/Logo.png";
import Home from "./image/Home.png";
import upload from "./image/upload.png";
import cart from "./image/shopping-cart.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.dFlex}>
          <div>
            <img src={Logo} alt="" className={styles.logo} />
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
// <div className={styles.hero}>

//   <div className={styles.navigation}>

//   </div>
//  <Hero />
// </div>
