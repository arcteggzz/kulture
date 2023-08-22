import styles from "./LoginModal.module.scss";
import cancel from "./image/cancel.pmg";
import { Link } from "react-router-dom";

export default function LoginModal() {
  return (
    <>
      <nav className={styles.LoginModal}>
        <div className={styles.dflex}>
          <h3>Signin</h3>
          <img src={cancel} />
        </div>
        <p>
          {" "}
          Enter details to signin, dont have an accoount
          <Link className={styles.link}> signup</Link>
        </p>
        <form>
          <div>
            <div className={styles.label}>
              <label>Email address</label>
            </div>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <div className={styles.label}>
              <label>Password</label>
            </div>
            <input type="password" id="password" name="password" />
          </div>

          <Link className={styles.link}>Forgot password</Link>

          <div>
            <button className={styles.signIn_btn}>Signin</button>
          </div>
        </form>
      </nav>
    </>
  );
}
