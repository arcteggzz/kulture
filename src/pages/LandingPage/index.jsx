import styles from "./LandingPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import { ForgotPasswordModal, LoginModal } from "../../components";

const LandingPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LandingPage}>
          <ForgotPasswordModal />
          <LoginModal />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
