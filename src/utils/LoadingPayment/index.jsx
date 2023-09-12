import styles from "./LoadingPayment.module.scss";
import DotLoader from "react-spinners/DotLoader";
import PropTypes from "prop-types";

const LoadingPayment = ({ paymentLoading, paymentHref, paymentError }) => {
  //ClipLoader Styles
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <div className={styles.LoadingPayment}>
        <div className={styles.loading_container}>
          {paymentLoading ? (
            <p>Generating Your secure payment link...</p>
          ) : !paymentError ? (
            <p>Link Ready</p>
          ) : (
            <></>
          )}

          {paymentError ? <p>Error generating payment Link</p> : <></>}

          {paymentLoading ? (
            <DotLoader
              color="#2e70cb"
              loading={paymentLoading}
              cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <></>
          )}

          {paymentLoading ? (
            <a
              href="#"
              rel="noopener noreferrer"
              className={styles.button_load}
            >
              Generating...
            </a>
          ) : paymentError ? (
            <></>
          ) : (
            <a
              href={paymentHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.payment_button}
            >
              Click to continue Payment
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default LoadingPayment;

LoadingPayment.propTypes = {
  paymentLoading: PropTypes.bool.isRequired,
  paymentError: PropTypes.bool.isRequired,
  paymentHref: PropTypes.string.isRequired,
};
