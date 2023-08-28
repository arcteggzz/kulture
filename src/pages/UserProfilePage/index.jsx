import styles from "./UserProfilePage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import Hero from "./Hero/Hero";
// import Stats from "./Stats/Stats";
// import Feeds from "../LandingPage/components/Feeds/Feeds";
import UserProfileNavigation from "./UserProfileNavigation";
import { Outlet } from "react-router-dom";

const UserProfilePage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.UserProfilePage}>
          <Hero />
          <UserProfileNavigation />
          {/* <Stats /> */}
          {/* <div className={styles.feeds}>
            <Feeds />
          </div> */}
          <Outlet />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default UserProfilePage;
