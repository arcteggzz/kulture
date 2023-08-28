import styles from "./Hero.module.scss";
import backgroundImage from "../images/hero.png";
import profileImage from "../images/profileImage.png";
import uploadImage from "../images/camera.png";
import dribbble from "../images/dribbble.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import location from "../images/location.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.backgroundImage}>
        <img src={backgroundImage} alt="" className={styles.bgImage} />
      </div>
      <div className={styles.profile}>
        <img src={profileImage} alt="" />
        <div>
          <p className={styles.name}>Banny Anderson</p>
          <p className={styles.harshTag}>@igbago</p>
          <button type="button" className={styles.uploadBtn}>
            UPLOAD BEAT
          </button>
        </div>
      </div>
      <div className={styles.uploadBtnContainer}>
        <div className={styles.upload_btn_wrapper}>
          <button className={styles.uploadFileBtn}>
            <img src={uploadImage} alt="" className={styles.uploadImg} />
            <p>Upload image</p>
          </button>
          <input type="file" name="myfile" />
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.intro}>
          <h3>Intro</h3>
          <Link className={styles.edit}>Edit</Link>
        </div>
        <p>
          Ahmed is a 30 years old music Artist who is based in Lagos, Nigeria.He
          wants checkout vocal samples and beats of producers for his musica nd
          purchase them with ease. I would love to have a platform where i can
          check sample of beats and vocals, purchase them with ease and get.
        </p>
        <div className={styles.links}>
          <div className={styles.flexContent}>
            <img src={location} alt="" />
            <p className={styles.location}>Lagos, Nigeria</p>
          </div>
          <Link><img src={dribbble} alt="" /></Link>
          <Link><img src={facebook} alt="" /></Link>
          <Link><img src={instagram} alt="" /></Link>
          <Link className={styles.edit}>Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
