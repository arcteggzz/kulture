import styles from "./UserProfileBuyer.module.scss";
import { AnimatedFadeInPage } from "../../utils/";

const UserProfileBuyer = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.UserProfileBuyer}>UserProfileBuyer</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default UserProfileBuyer;
