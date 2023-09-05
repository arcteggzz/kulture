import styles from "./UserProfilePage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import Hero from "./Hero/Hero";
import UserProfileNavigation from "./UserProfileNavigation";
import { Outlet } from "react-router-dom";

const UserProfilePage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.UserProfilePage}>
          <Hero />
          <UserProfileNavigation />
          <Outlet />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default UserProfilePage;
