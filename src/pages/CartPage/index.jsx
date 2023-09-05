import styles from "./CartPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import { useSelector } from "react-redux";
import SingleCartItem from "../../components/SingleCartItem";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <>
      <AnimatedFadeInPage>
        <h1 className={styles.header_text}>Cart Review</h1>
        <section className={styles.CartPage}>
          <div className={styles.cart_items_container}>
            {cartItems.length === 0 ? <p>No Items in the cart</p> : <></>}
            {cartItems.map((cartItem, index) => {
              return (
                <>
                  <SingleCartItem
                    key={`${cartItem.beatId}${index}`}
                    beatName={cartItem.beatName}
                    beatLicense={cartItem.beatLicense}
                    image={cartItem.image}
                    beatId={cartItem.beatId}
                    beatPrice={cartItem.beatPrice}
                    availableCopies={cartItem.availableCopies}
                    userOwnerId={cartItem.userOwnerId}
                    beatSize={cartItem.beatSize}
                    totalSales={cartItem.totalSales}
                  />
                </>
              );
            })}
          </div>

          <div className={styles.cart_summary_container}>
            <h3>Cart Summary</h3>
          </div>
        </section>
      </AnimatedFadeInPage>
    </>
  );
};

export default CartPage;
