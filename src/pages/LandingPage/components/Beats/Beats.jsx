import styles from "./Beats.module.scss";
import profileImage from "../images/profileImage.png";
import beatImg from "../images/beatImg.png";
import heart from "../images/Heart.png";
import share from "../images/share.png";

const Beats = () => {
  return (
    <>
      
      <div className={styles.beats}>
        <div className={styles.beatProfile}>
          <img
            src={profileImage}
            alt="Profile Image"
            className={styles.profileImage}
          />
          <p>
            Miriam <span>@ohuly</span> <span> • 2 Hours Ago</span>
          </p>
        </div>
        <div className={styles.beatDetails}>
          <img src={beatImg} alt="Beat" className={styles.beatImg} />
          <div>
            <h2>Wintspread cabasky</h2>
            <p>beat by Mariam @ohuly </p>
            <p> released on 23 November 2022</p>
            <div className={styles.price}>
              <p>NGN 70,000</p>
              <button className={styles.buyBtn}>BUY NOW</button>
            </div>
          </div>
        </div>
        <div className={styles.shareSave}>
          <div className={styles.btnFlexx}>
            <img src={share}/>
            <button className={styles.shareBtn}>Share</button>
          </div>
          <div className={styles.btnFlex}>
            <img src={heart}/>
            <button className={styles.saveBtn}>Save for later</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Beats;
