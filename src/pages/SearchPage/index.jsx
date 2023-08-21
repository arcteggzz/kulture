import styles from "./SearchPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import Beats from "../LandingPage/components/Beats/Beats.jsx";
import BrowseBeats from "./BrowseBeats/BrowseBeats";
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SearchPage}>
            <div className={styles.filter}>
              <Link className={styles.link}>All</Link>
              <Link className={styles.link}>Afro drill</Link>
              <Link className={styles.link}>Afro trap</Link>
              <Link className={styles.link}>World</Link>
              <Link className={styles.link}>Fuji fusion</Link>
              <Link className={styles.link}>R&B/soul</Link>
              <form>
                <select name="Beats">
                  <options value="A">A</options>
                  <options value="B">B</options>
                  <options value="C">C</options>
                </select>
              </form>
            </div>
          <div className={styles.beats}>
            <Beats />
          </div>
          <BrowseBeats />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SearchPage;
