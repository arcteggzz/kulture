import styles from "./CartPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";

const CartPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <section className={styles.CartPage}>CartPage</section>
      </AnimatedFadeInPage>
    </>
  );
};

export default CartPage;
