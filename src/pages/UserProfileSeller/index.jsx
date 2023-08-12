import styles from "./UserProfileSeller.module.scss";
import { AnimatedFadeInPage } from "../../utils/";

const UserProfileSeller = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.UserProfileSeller}>UserProfileSeller</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default UserProfileSeller;
