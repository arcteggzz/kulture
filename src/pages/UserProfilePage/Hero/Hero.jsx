import styles from "./Hero.module.scss";
import { useState } from "react";
import backgroundImage from "../images/hero.png";
import profileImage from "../images/profileImage.png";
import uploadImage from "../images/camera.png";
import dribbble from "../images/dribbble.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import location from "../images/location.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentUserFirstName,
  selectCurrentUserType,
  selectCurrentUserLastName,
  selectCurrentUserName,
  selectCurrentUserImage,
} from "../../../redux/features/auth/authSlice";
import { routePaths } from "../../../utils/";

const Hero = () => {
  const currentUserFirstName = useSelector(selectCurrentUserFirstName);
  const currentUserLastName = useSelector(selectCurrentUserLastName);
  const currentUsername = useSelector(selectCurrentUserName);
  const currentUserType = useSelector(selectCurrentUserType);
  const currentUserImage = useSelector(selectCurrentUserImage);

  const [imageSrc, setImageSrc] = useState(currentUserImage);

  const handleImageError = () => {
    setImageSrc(profileImage); // Replace with your actual dummy image path
  };

  return (
    <div className={styles.Hero}>
      <div className={styles.backgroundImage}>
        <img src={backgroundImage} alt="" className={styles.bgImage} />
      </div>
      <div className={styles.profile}>
        <img
          src={imageSrc ? imageSrc : profileImage}
          alt=""
          onError={handleImageError}
        />
        <div>
          <p
            className={styles.name}
          >{`${currentUserFirstName} ${currentUserLastName}`}</p>
          <p className={styles.harshTag}>{`@${currentUsername}`}</p>
          <Link
            type="button"
            className={styles.uploadBtn}
            to={routePaths.UPLOADPAGE}
          >
            UPLOAD BEAT
          </Link>
        </div>
      </div>
      <div className={styles.uploadBtnContainer}>
        <div className={styles.upload_btn_wrapper}>
          <button className={styles.uploadFileBtn}>
            <img src={uploadImage} alt="" className={styles.uploadImg} />
            <p>{currentUserType === "producer" ? "Producer" : "Artiste"}</p>
          </button>
          {/* <input type="file" name="myfile" /> */}
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
          <Link>
            <img src={dribbble} alt="" />
          </Link>
          <Link>
            <img src={facebook} alt="" />
          </Link>
          <Link>
            <img src={instagram} alt="" />
          </Link>
          <Link className={styles.edit}>Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
