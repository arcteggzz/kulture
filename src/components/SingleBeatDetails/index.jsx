import styles from "./SingleBeatDetails.module.scss";
import dummy_image from "./dummy_image.png";
import PropTypes from "prop-types";

export default function SingleBeatDetails({
  variant,
  beatImage,
  beatName,
  beatId,
  beatCost,
  beatOwnerName,
  beatOwnerUsername,
  beatGenre,
  beatLicense,
  beatSize,
  beatUploadDate,
  beatLikes,
}) {
  return (
    <>
      <div className={styles.SingleBeatDetails}>
        <img
          src={beatImage ? beatImage : dummy_image}
          alt=""
          className={styles.beat_image}
        />

        <div className={styles.right_side}>
          <div className={styles.right_side_primary}>
            <div className={styles.right_side_primary_text}>
              <h2 className={styles.beat_name_text}>{beatName}</h2>
              <p className={styles.beat_id_text}>{`or${beatId}`}</p>
            </div>
            <h3 className={styles.beat_cost_text}>{`NGN ${beatCost}`}</h3>
          </div>

          <div className={styles.right_side_secondary}>
            {variant === "producerAllBeats" ? (
              <>
                <p className={styles.secondary_text}>{beatGenre}</p>
                <p className={styles.secondary_text}>{beatSize}</p>
              </>
            ) : (
              <></>
            )}
            {variant === "producerTopBeats" ? (
              <>
                <p className={styles.secondary_text}>{`${beatLikes}likes`}</p>
              </>
            ) : (
              <></>
            )}
            {variant === "artisteFavoriteBeats" ||
            variant === "artistePurchasedBeats" ? (
              <>
                <p className={styles.secondary_text}>{beatOwnerName}</p>
                <p
                  className={styles.tertiary_text}
                >{`@${beatOwnerUsername}`}</p>
              </>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.right_side_tetiary}>
            <p className={styles.secondary_text}>{beatLicense}</p>
          </div>

          <div className={styles.right_side_footer}>
            <p className={styles.beat_date_text}>{beatUploadDate}</p>

            <div className={styles.button_container}>
              {variant === "producerAllBeats" ? (
                <>
                  <button className={styles.primary_button}>Sample</button>
                  <button className={styles.delete_button}>Delete</button>
                </>
              ) : (
                <></>
              )}
              {variant === "producerTopBeats" ? (
                <>
                  <button className={styles.primary_button}>Sample</button>
                </>
              ) : (
                <></>
              )}
              {variant === "artistePurchasedBeats" ? (
                <>
                  <button className={styles.primary_button}>Sample</button>
                  <button className={styles.primary_button}>Download</button>
                </>
              ) : (
                <></>
              )}
              {variant === "artisteFavoriteBeats" ? (
                <>
                  <button className={styles.primary_button}>Sample</button>
                  <button className={styles.primary_button}>Add to Cart</button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

SingleBeatDetails.propTypes = {
  variant: PropTypes.string,
  beatImage: PropTypes.string,
  beatName: PropTypes.string,
  beatId: PropTypes.string,
  beatCost: PropTypes.string,
  beatOwnerName: PropTypes.string,
  beatOwnerUsername: PropTypes.string,
  beatGenre: PropTypes.string,
  beatSize: PropTypes.string,
  beatLicense: PropTypes.string,
  beatUploadDate: PropTypes.string,
  beatLikes: PropTypes.number,
};
