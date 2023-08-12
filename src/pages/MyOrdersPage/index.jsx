import styles from "./MyOrdersPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";

const MyOrdersPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.MyOrdersPage}>MyOrdersPage</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default MyOrdersPage;
