import styles from "./LoadingIcon.module.scss";
import DotLoader from "react-spinners/DotLoader";
import PropTypes from "prop-types";

const LoadingIcon = ({ loading, loaderSize = 40 }) => {
  //ClipLoader Styles
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <div className={styles.LoadingIcon}>
        <DotLoader
          color="#2e70cb"
          loading={loading}
          cssOverride={override}
          size={loaderSize}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default LoadingIcon;

LoadingIcon.propTypes = {
  loading: PropTypes.bool.isRequired,
  loaderSize: PropTypes.number.isRequired,
};
