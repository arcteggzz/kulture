import { BiSearch } from "react-icons/bi";
import styles from "./Hero.module.scss";
import hero from "../image/hero.png";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.heroBG}>
        <img src={hero} alt="" />
      </div>
      <h1>
        Find and upload trending beat <br /> for music production
      </h1>
      <p>
        Buy bests beats from the people who upload them. You can find <br /> new
        beats, vocals, share your favorites directly.
      </p>
      <div className={styles.searchBtn}>
        <div>
          <button className={styles.find}>Find trending beats</button>
          <BiSearch size={20} className={styles.searchIcon} />
        </div>
        <button className={styles.uploadBtn}>UPLOAD YOUR BEAT</button>
      </div>
    </div>
  );
};

export default Hero;
