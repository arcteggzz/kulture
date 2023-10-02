import styles from "./SingleBeatSearch.module.scss";
import PropTypes from "prop-types";

const SingleBeatSearch = ({
  position,
  beatName,
  size,
  genre,
  license,
  availableCopies,
  copiesSold,
}) => {
  return (
    <>
      <div className={styles.SingleBeatSearch}>
        <p>{position}.</p>

        <p className={styles.beat_name}>{beatName}</p>

        <div className={styles.details_container}>
          <p>Size: {size}kb</p>
          <p>Genre: {genre}</p>
        </div>

        <p>{license}</p>

        <div className={styles.copies_count}>
          <p>Available Copies: {availableCopies}</p>
          <p>Copies sold: {copiesSold}</p>
        </div>
      </div>
    </>
  );
};

export default SingleBeatSearch;

SingleBeatSearch.propTypes = {
  beatName: PropTypes.string,
  position: PropTypes.string,
  size: PropTypes.string,
  genre: PropTypes.string,
  license: PropTypes.string,
  availableCopies: PropTypes.string,
  copiesSold: PropTypes.string,
};
