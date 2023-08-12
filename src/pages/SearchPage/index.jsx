import styles from "./SearchPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";

const SearchPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SearchPage}>SearchPage</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SearchPage;
