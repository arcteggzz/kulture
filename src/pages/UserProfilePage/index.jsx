import styles from "./UserProfilePage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import Hero from "./Hero/Hero";
import Stats from "./Stats/Stats";
import Feeds from "../LandingPage/components/Feeds/Feeds";

const UserProfilePage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.UserProfilePage}>
          <Hero />
          <Stats />
          <div className={styles.feeds}>
            <Feeds />
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default UserProfilePage;
