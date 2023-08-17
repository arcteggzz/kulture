import popularProducer from "../images/profileImage.png";
import Beats from "../Beats/Beats.jsx";
import styles from "./Feeds.module.scss";
import { Link } from "react-router-dom";

const Feeds = () => {
  return (
    <>
      <section>
        <h2>Feed</h2>
        <div className={styles.feedFlex}>
          <div>
            <div className={styles.trends}>
              <h3>Trending Search</h3>
              <p>Mariam</p>
              <p>Winifred</p>
              <p>Winifred</p>
              <p>Winifred</p>
            </div>
            <div className={styles.producers}>
              <h3>Popular producers</h3>
              <div className={styles.popularProducer}>
                <img
                  src={popularProducer}
                  alt=""
                  className={styles.profileImage}
                />
                <p>Mariam</p>
              </div>
              <div className={styles.popularProducer}>
                <img
                  src={popularProducer}
                  alt=""
                  className={styles.profileImage}
                />
                <p>Mariam</p>
              </div>
              <div className={styles.popularProducer}>
                <img
                  src={popularProducer}
                  alt=""
                  className={styles.profileImage}
                />
                <p>Mariam</p>
              </div>
              <div className={styles.popularProducer}>
                <img
                  src={popularProducer}
                  alt=""
                  className={styles.profileImage}
                />
                <p>Mariam</p>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.filter}>
              <Link className={styles.link}>All</Link>
              <Link className={styles.link}>Afro Beats</Link>
              <Link className={styles.link}>World</Link>
              <Link className={styles.link}>Juju</Link>
              <form>
                <select name="Beats">
                  <options value="A">A</options>
                  <options value="B">B</options>
                  <options value="C">C</options>
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
