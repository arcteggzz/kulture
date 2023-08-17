import styles from "./LandingPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import { ForgotPasswordModal, LoginModal } from "../../components";
import PopularUploads from "./components/PopularUpload/PopularUploads";
import Feeds from "./components/Feeds/Feeds";
import Hero from "../../components/Navbar/Hero/Hero";

const LandingPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main>
          <div className={styles.hero}>
            <Hero />
          </div>
          <div className={styles.LandingPage}>
            <PopularUploads />
            <Feeds />
            <ForgotPasswordModal />
            <LoginModal />
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
