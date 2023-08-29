import Beats from "../Beats/Beats.jsx";
import styles from "./Feeds.module.scss";
import { Link } from "react-router-dom";
import TrendingCategories from "./TrandingCategory/TrendingCategories";
import TrendingProducers from "./TrandingProducers/TrendingProducers.jsx";

const Feeds = () => {
  return (
    <>
      <section className={styles.Feeds}>
        <h2 className={styles.feed}>Feed</h2>
        <div className={styles.feedFlex}>
          <div>
            <TrendingCategories />
            <TrendingProducers />
          </div>

          <div>
            <div className={styles.dFlex}>
              <div className={styles.filter}>
                <Link className={styles.link}>All</Link>
                <Link className={styles.link}>Afro Beats</Link>
                <Link className={styles.link}>World</Link>
                <Link className={styles.link}>Juju</Link>
              </div>
              <form>
                <select name="Beats">
                  <option value="Filter">Filter</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </form>
            </div>
            <Beats />
          </div>
        </div>
      </section>
    </>
  );
};

export default Feeds;
