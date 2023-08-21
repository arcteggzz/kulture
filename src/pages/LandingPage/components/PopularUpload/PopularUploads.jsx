import styles from "./PopularUploads.module.scss";
import image from "../images/upload.png";

const PopularUploads = () => {
  return (
    <div className={styles.PopularUploads}>
      <h2>Popular Uploads</h2>
      <section className={styles.uploads}>
        <div>
          <img className={styles.imgUpload} src={image} alt="uploaded Image" />
          <p className={styles.text}>
            Wintspread <br /> <span>@zojaman</span>
          </p>
        </div>
        <div>
          <img className={styles.imgUpload} src={image} alt="uploaded Image" />
          <p className={styles.text}>
            Wintspread <br /> <span>@zojaman</span>
          </p>
        </div>
        <div>
          <img className={styles.imgUpload} src={image} alt="uploaded Image" />
          <p className={styles.text}>
            Wintspread <br /> <span>@zojaman</span>
          </p>
        </div>
        <div>
          <img className={styles.imgUpload} src={image} alt="uploaded Image" />
          <p className={styles.text}>
            Wintspread <br /> <span>@zojaman</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PopularUploads;
