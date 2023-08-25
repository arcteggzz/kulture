import { useDispatch } from "react-redux";
import styles from "./ForgotPasswordModal.module.scss";
import cancel from "./image/cancel.png";
import { Link } from "react-router-dom";
import { closeForgotPasswordModal } from "../../redux/features/forgotPasswordModal/forgotPasswordModalSlice";
import { routePaths } from "../../utils";

export default function ForgotPasswordModal() {
  const dispatch = useDispatch();

  const closeForgotPasswordModalHandler = () => {
    dispatch(closeForgotPasswordModal());
  };
  return (
    <>
      <nav className={styles.ForgotPasswordModal}>
        <div className={styles.dflex}>
          <h3>Forgot password</h3>
          <button onClick={() => closeForgotPasswordModalHandler()}>
            <img src={cancel} />
          </button>
        </div>
        <p>
          {" "}
          Enter details to change password or
          <Link className={styles.link} to={routePaths.SIGNUPPAGE}> signup</Link>
        </p>
        <form>
          <div>
            <div className={styles.label}>
              <label>Email address</label>
            </div>
            <div className={styles.buttonIn}>
              <input type="email" id="email" name="email" />
              <button className={styles.otpBtn}>Send OTP</button>
            </div>
          </div>
          <div>
            <div className={styles.label}>
              <label>OTP</label>
            </div>
            <input type="text" id="otp" name="otp" />
          </div>
          <div>
            <div className={styles.label}>
              <label>New password</label>
            </div>
            <input type="password" id="newPassword" name="newPassword" />
          </div>
          <div>
            <div className={styles.label}>
              <label>Confirm password</label>
            </div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>

          <div>
            <button className={styles.signIn_btn}>Change Password</button>
          </div>
        </form>
      </nav>
    </>
  );
}
