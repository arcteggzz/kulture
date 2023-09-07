import styles from "./Beats.module.scss";
// import profileImage from "../images/profileImage.png";
import beatImg from "../images/beatImg.png";
// import playButton from "../images/playBtn.png";
// import pauseButton from "../images/pause.png";
import heart from "../images/Heart.png";
import share from "../images/share.png";
// import deleteButton from "../images/deleteButton.png";
import { useGetAllBeatsQuery } from "../../../../redux/features/beatsApiSlice/beatsApiSlice";

const Beats = () => {
  const {
    data: allBeats,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllBeatsQuery();

  let content;
  if (isLoading) {
    content = <h3 className={styles.feedback}>loading</h3>;
  } else if (isSuccess) {
    content = (
      <>
        {allBeats.data.data.map((beat) => {
          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          // console.log(beat.attributes);
          const createdDate = new Date(beat.producer.created_at);
          const date = `${createdDate.getDate()} ${
            months[createdDate.getMonth()]
          } ${createdDate.getFullYear()}`;
          return (
            <>
              <div className={styles.beats}>
                <div className={styles.beatProfile}>
                  <img
                    src={beat.attributes.image_url}
                    // alt="Profile Image"
                    className={styles.profileImage}
                  />
                  <p>
                    {beat.attributes.name} <span>@ohuly</span>{" "}
                    <span> • 2 Hours Ago</span>
                  </p>
                </div>
                <div className={styles.beatDetails}>
                  <img src={beatImg} alt="Beat" className={styles.beatImg} />
                  <div className={styles.audio_container}>
                    <audio
                      src={beat.attributes.file_url}
                      controls
                      controlsList="nodownload noplaybackrate"
                      className={styles.custom_audio}
                    />
                  </div>

                  <div>
                    <h2>{beat.attributes.genre}</h2>
                    <p>beat by {beat.attributes.name} @ohuly </p>
                    <p> released on {date}</p>
                    <div className={styles.price}>
                      <p>NGN{beat.attributes.price}</p>
                      <button className={styles.buyBtn}>BUY NOW</button>
                      {/* <button type="button" className={styles.editBtn}>Edit</button>
                <button type="button" className={styles.deleteBtn}>
                  <img src={deleteButton} alt="" />
                </button> */}
                    </div>
                  </div>
                </div>
                <div className={styles.shareSave}>
                  <div className={styles.btnFlexx}>
                    <img src={share} />
                    <button className={styles.shareBtn}>Share</button>
                  </div>
                  <div className={styles.btnFlex}>
                    <img src={heart} />
                    <button className={styles.saveBtn}>Save for later</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  } else if (isError) {
    content = (
      <h3 className={styles.feedback}>
        something went wrong. Please try again.
      </h3>
    );
  }

  return <>{content}</>;
};

export default Beats;
