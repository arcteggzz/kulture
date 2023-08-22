import styles from "./SignUpPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import logo from "./image/logo.png";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
      <main className={styles.SignUpPage}>
          <div className={styles.postion}>
            <div className={styles.background_image}></div>
            <div className={styles.logoContainer}>
              <img src={logo} />
              <h1>Kindly provide the details below to get started</h1>
            </div>
          </div>
          <div className={styles.signUpPage_content}>
            <div className={styles.container}>
              <form>
                <div className={styles.dflex}>
                  <div>
                    <div className={styles.label}>
                      <label>First Name</label>
                    </div>
                    <input type="text" id="fname" name="firstname" />
                  </div>
                  <div>
                    <div className={styles.label}>
                      <label>Last Name</label>
                    </div>
                    <input type="text" id="lname" name="lastname" />
                  </div>
                </div>
                <div>
                  <div className={styles.label}>
                    <label>Email</label>
                  </div>
                  <input type="email" id="email" name="email" />
                </div>
                <div>
                  <div className={styles.label}>
                    <label>Password</label>
                  </div>
                  <input type="password" id="password" name="password" />
                  {/* <p>Passwords must be at least 8 characters in length, 
                  at least one uppercase character, at least one lowercase character, 
                  and must contain at least one digit character OR a symbol.</p> */}
                </div>
                <div>
                  <div className={styles.label}>
                    <label>Confirm Password</label>
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                  />
                </div>

                <div className={styles.checkbox_container}>
                  <input type="checkbox" />
                  <label>
                    By checking the box, you accept Kulture’s
                    <Link className={styles.link}> Terms and
                    Conditions</Link>
                  </label>
                </div>
                <button className={styles.signUp_btn}>Sign Up</button>
              </form>
            </div>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SignUpPage;
