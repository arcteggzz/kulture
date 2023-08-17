import styles from "./PopularUploads.module.scss";
import image from "../images/upload.png";

const PopularUploads = () => {
  return (
    <>
      <h2>Popular Uploads</h2>
      <section className={styles.PopularUploads}>
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
    </>
  );
};

export default PopularUploads;
