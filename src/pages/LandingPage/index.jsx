import styles from "./LandingPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import Feeds from "./components/Feeds/Feeds";
import PopularUploads from "./components/PopularUpload/PopularUploads";
import Hero from "./components/Hero/Hero";

const LandingPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LandingPage}>
          <Hero />
          <PopularUploads />
          <Feeds />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
