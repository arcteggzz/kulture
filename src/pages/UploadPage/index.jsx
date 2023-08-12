import styles from "./UploadPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";

const UploadPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <section className={styles.UploadPage}>UploadPage</section>
      </AnimatedFadeInPage>
    </>
  );
};

export default UploadPage;
