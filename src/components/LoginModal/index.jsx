import styles from "./LoginModal.module.scss";
import cancel from "./image/cancel.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeLoginModal } from "../../redux/features/loginModal/loginModalSlice";
import { openForgotPasswordModal } from "../../redux/features/forgotPasswordModal/forgotPasswordModalSlice";

export default function LoginModal() {
  const dispatch = useDispatch();

  const closeLoginModalHandler = () => {
    dispatch(closeLoginModal());
  };
  
  const openForgotPasswordModalHandler = () => {
    dispatch(closeLoginModal());
    dispatch(openForgotPasswordModal());
  };

  return (
    <>
      <div className={styles.LoginModal}>
        <div className={styles.dflex}>
          <h3>Signin</h3>
          <button onClick={() => closeLoginModalHandler()}>
            <img src={cancel} />
          </button>
        </div>
        <p>
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

          <button
            onClick={() => openForgotPasswordModalHandler()}
            className={styles.forgotLink}
            type="button">
            Forgot password
          </button>

          <div>
            <button className={styles.signIn_btn}>Signin</button>
          </div>
        </form>
      </div>
    </>
  );
}
