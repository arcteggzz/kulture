import styles from "./VerifyPaymentPage.module.scss";
import { AnimatedFadeInPage, routePaths } from "../../utils/";
import { LoadingIcon } from "../../utils/";
import failed_icon from "./images/failed_icon.png";
import success_icon from "./images/success_icon.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/auth/authSlice";

const VerifyPaymentPage = () => {
  const dispatch = useDispatch();
  const isLoading = false;
  const isSuccess = false;
  const isError = true;
  const response = [];

  const relogin = () => {
    dispatch(
      setCredentials({
        userName: response?.data?.user?.attributes?.username,
        accessToken: response?.data?.token,
        userImage: response?.data?.user?.attributes?.profile_picture,
        userId: response?.data?.user.id,
        userEmail: response?.data?.user?.attributes?.email,
        firstName: response?.data?.user?.attributes?.first_name,
        lastName: response?.data?.user?.attributes?.last_name,
        userType: response?.data?.user?.attributes?.user_type,
      })
    );
  };

  let content;
  if (isLoading) {
    content = (
      <>
        <div className={styles.LoadingIcon_container}>
          <LoadingIcon loading={isLoading} loaderSize={80} />
        </div>
        <p>Verifying your payment...</p>
      </>
    );
  } else if (isSuccess) {
    content = (
      <>
        <img src={success_icon} alt="" />
        <p>Payment Verification successful.</p>
        <Link
          to={routePaths.USERPROFILEPAGEROUTES.ARTISTE.PURCHASED_BEATS}
          className={styles.payment_button}
        >
          View Purchased Beat
        </Link>
      </>
    );
  } else if (isError) {
    content = (
      <>
        <img src={failed_icon} alt="" />
        <p>Payment Verification failed.</p>
        <button
          className={styles.payment_button}
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </>
    );
  }

  return (
    <>
      <AnimatedFadeInPage>
        <div className={styles.VerifyPaymentPage}>{content}</div>
      </AnimatedFadeInPage>
    </>
  );
};

export default VerifyPaymentPage;
