import styles from "./CartPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import SingleCartItem from "../../components/SingleCartItem";
import { useGetAllCartItemsQuery } from "../../redux/features/cart/cartApiSlice";
import { LoadingIcon } from "../../utils/";

const CartPage = () => {
  const {
    data: allCartItems,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllCartItemsQuery();

  const handleCheckout = () => {};

  console.log(allCartItems?.data?.attributes?.items);

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
                beatLicense={beatData.beat_license} //missing
                image={beatData.image_url}
                beatId={beatData.id}
                beatPrice={beatData.price}
                availableCopies={beatData.available_copies} //missing
                userOwnerId={beatData.owner_id} //missing
                beatSize={beatData.beat_size} //missing
                totalSales={beatData.total_sales} //missing
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

            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </section>
      </AnimatedFadeInPage>
    </>
  );
};

export default CartPage;
