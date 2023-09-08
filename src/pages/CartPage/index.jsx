import styles from "./CartPage.module.scss";
import { AnimatedFadeInPage, LoadingPayment } from "../../utils/";
import SingleCartItem from "../../components/SingleCartItem";
import { useGetAllCartItemsQuery } from "../../redux/features/cart/cartApiSlice";
import { LoadingIcon } from "../../utils/";
import { BASE_URL } from "../../utils/apiRoutePaths";
import { useSelector } from "react-redux";
import { selectCurrentAccessToken } from "../../redux/features/auth/authSlice";
import { useState } from "react";
import axios from "axios";

const CartPage = () => {
  const currentUserAccessToken = useSelector(selectCurrentAccessToken);
  const [showPaymentLoading, setShowPaymentLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [generatedHref, setGeneratedHref] = useState(null);

  const {
    data: allCartItems,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllCartItemsQuery();

  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${currentUserAccessToken}`,
  //   },
  // };

  // const handleCheckout = () => {
  //   setShowPaymentLoading(true);
  //   setPaymentLoading(true);

  //   fetch(`${BASE_URL}/payment/pay`, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       console.log(data?.data);
  //       setPaymentLoading(false);
  //       setPaymentError(false);
  //       setGeneratedHref(data?.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setPaymentLoading(false);
  //       setPaymentError(true);
  //     });
  // };

  const handleCheckout = () => {
    setShowPaymentLoading(true);
    setPaymentLoading(true);

    const headers = {
      Authorization: `Bearer ${currentUserAccessToken}`,
    };

    axios
      .post(`${BASE_URL}/payment/pay`, null, {
        headers,
      })
      .then((response) => {
        console.log(response?.data?.data);
        setPaymentLoading(false);
        setPaymentError(false);
        setGeneratedHref(response?.data.data);
      })
      .catch((error) => {
        console.log(error);
        setPaymentLoading(false);
        setPaymentError(true);
      });

    // fetch(`${BASE_URL}/payment/pay`, requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     console.log(data?.data);
    //     setPaymentLoading(false);
    //     setPaymentError(false);
    //     setGeneratedHref(data?.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setPaymentLoading(false);
    //     setPaymentError(true);
    //   });
  };

  let content;
  if (isLoading) {
    content = (
      <div className={styles.LoadingIcon_container}>
        <LoadingIcon loading={isLoading} />
      </div>
    );
  } else if (isSuccess && allCartItems?.data?.attributes?.items?.length < 1) {
    content = <h3>You do not have any beats in your cart yet.</h3>;
  } else if (isSuccess && allCartItems?.data?.attributes?.items?.length > 0) {
    content = (
      <>
        {allCartItems?.data?.attributes?.items.map((beatData, index) => {
          return (
            <>
              <SingleCartItem
                key={`${beatData.id}${index}`}
                beatName={beatData.name}
                beatLicense={beatData.beat_license}
                image={beatData.image_url}
                beatId={beatData.id}
                beatPrice={beatData.price}
                availableCopies={beatData.available_copies}
                userOwnerId={beatData.owner_id}
                beatSize={beatData.beat_size}
                totalSales={beatData.total_sales}
              />
            </>
          );
        })}
      </>
    );
  } else if (isError) {
    content = <h3>Something went wrong. Serverside Error. Reload Browser.</h3>;
  }

  let cartContentSummary;
  if (isLoading) {
    cartContentSummary = (
      <div className={styles.LoadingIcon_container}>
        <LoadingIcon loading={isLoading} />
      </div>
    );
  } else if (isSuccess && allCartItems?.data?.attributes?.items?.length < 1) {
    cartContentSummary = <h3>No content</h3>;
  } else if (isSuccess && allCartItems?.data?.attributes?.items?.length > 0) {
    cartContentSummary = (
      <>
        <p>
          Total Items :{" "}
          <span>{allCartItems?.data?.attributes?.items?.length}</span>
        </p>
        <p>
          Total Cost :{" "}
          <span>NGN{allCartItems?.data?.attributes?.total_price}</span>
        </p>
      </>
    );
  } else if (isError) {
    cartContentSummary = (
      <h3>Something went wrong. Serverside Error. Reload Browser.</h3>
    );
  }

  return (
    <>
      <AnimatedFadeInPage>
        <h1 className={styles.header_text}>Cart Review</h1>
        <section className={styles.CartPage}>
          <div className={styles.cart_items_container}>{content}</div>

          <div className={styles.cart_summary_container}>
            <h3>Cart Summary</h3>

            <div>{cartContentSummary}</div>

            <button onClick={handleCheckout}>Proceed to Payment</button>
          </div>
        </section>

        {showPaymentLoading ? (
          <LoadingPayment
            paymentLoading={paymentLoading}
            paymentHref={generatedHref}
            paymentError={paymentError}
          />
        ) : (
          <></>
        )}
      </AnimatedFadeInPage>
    </>
  );
};

export default CartPage;
