import styles from "./UserProfilePage.module.scss";
import { AnimatedFadeInPage } from "../../utils";

const UserProfilePage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.UserProfilePage}>UserProfilePage</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default UserProfilePage;
