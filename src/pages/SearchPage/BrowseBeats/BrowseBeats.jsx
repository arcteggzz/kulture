import styles from "./BrowseBeats.module.scss";
import img1 from "../images/Img1.png";
import img2 from "../images/Img2.png";
import img3 from "../images/Img3.png";
import img4 from "../images/Img4.png";

const BrowseBeats = () => {
  return (
    <section className={styles.BrowseBeats}>
      <div className={styles.dFlex}>
        <h3>Browse Beats</h3>
        <h4>View All</h4>
      </div>
      <div className={styles.flexBeats}>
        <div className={styles.content}>
          <img src={img1} alt="" />
          <div>
            <h4>Afro</h4>
            <p>Beats by Winifred</p>
          </div>
        </div>
        <div className={styles.content}>
          <img src={img2} alt="" />
          <div>
            <h4>Afro Tape</h4>
            <p>Beats by Winifred</p>
          </div>
        </div>
        <div className={styles.content}>
          <img src={img3} alt="" />
          <div>
            <h4>Alfe</h4>
            <p>Beats by Winifred</p>
          </div>
        </div>
        <div className={styles.content}>
          <img src={img4} alt="" />
          <div>
            <h4>World</h4>
            <p>Beats by Winifred</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseBeats;
