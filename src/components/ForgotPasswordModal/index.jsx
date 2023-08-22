import styles from "./ForgotPasswordModal.module.scss";
import cancel from "./image/cancel.png";
import { Link } from "react-router-dom";

export default function ForgotPasswordModal() {
  return (
    <>
      <nav className={styles.ForgotPasswordModal}>
          <div className={styles.dflex}>
            <h3>Forgot password</h3>
            <img src={cancel} />
          </div>
          <p>
            {" "}
            Enter details to change password or
            <Link className={styles.link}> signup</Link>
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
              <input type="password" id="password" name="newPassword" />
            </div>
            <div>
              <div className={styles.label}>
                <label>Confirm password</label>
              </div>
              <input type="password" id="password" name="confirmPassword" />
            </div>

            <Link className={styles.link}>Forgot password</Link>

            <div>
              <button className={styles.signIn_btn}>Change Password</button>
            </div>
          </form>
        </nav>

    </>
  );
}
