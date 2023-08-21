import styles from "./Hero.module.scss";
import hero_bg from "./images/hero_bg.png";
import searchIcon from "./images/search-icon.png";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.heroBG}>
        <img src={hero_bg} alt="" />
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
          <input className={styles.find} placeholder="Find trending beats" />
          <button className={styles.searchIcon}>
            <img src={searchIcon} />
          </button>
        </div>
        <button className={styles.uploadBtn}>UPLOAD YOUR BEAT</button>
      </div>
    </div>
  );
};

export default Hero;
