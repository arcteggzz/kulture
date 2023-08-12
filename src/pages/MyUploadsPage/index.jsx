import styles from "./MyUploadsPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";

const MyUploadsPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.MyUploadsPage}>MyUploadsPage</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default MyUploadsPage;
