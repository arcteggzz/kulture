import styles from "./VerifyPaymentPage.module.scss";
import { AnimatedFadeInPage, routePaths } from "../../utils/";
import { LoadingIcon } from "../../utils/";
import failed_icon from "./images/failed_icon.png";
import success_icon from "./images/success_icon.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/apiRoutePaths";
import axios from "axios";

const VerifyPaymentPage = () => {
  const dispatch = useDispatch();
  const currentFullUrl = window.location.href;
  const url = new URL(currentFullUrl);
  const trxref = url.searchParams.get("trxref");
  const reference = url.searchParams.get("reference");

  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!trxref || !reference) return;

    const verifyPaymentUrl = `${BASE_URL}/verifyPayment?trxref=${trxref}&reference=${reference}`; // Replace with your API endpoint

    axios
      .get(verifyPaymentUrl)
      .then((response) => {
        console.log(response);

        if (response?.data?.status) {
          setIsLoading(false);
          setIsSuccess(true);
          dispatch(
            setCredentials({
              userName: response?.data?.data?.user?.attributes?.username,
              accessToken: response?.data?.data?.token,
              userImage:
                response?.data?.data?.user?.attributes?.profile_picture,
              userId: response?.data?.data?.user?.id,
              userEmail: response?.data?.data?.user?.attributes?.email,
              firstName: response?.data?.data?.user?.attributes?.first_name,
              lastName: response?.data?.data?.user?.attributes?.last_name,
              userType: response?.data?.data?.user?.type,
            })
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });
  });

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
