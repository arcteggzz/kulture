import styles from "./SavedItemsPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";

const SavedItemsPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SavedItemsPage}>SavedItemsPage</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SavedItemsPage;
