import styles from "./SingleCartItem.module.scss";
import dummy_image from "./singleCartItemicon.png";
import remove_icon from "./remove_icon.png";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/features/cart/cartSlice";

const SingleCartItem = ({
  image,
  beatName,
  beatLicense,
  beatId,
  beatPrice,
  availableCopies,
  userOwnerId,
  totalSales,
  beatSize,
}) => {
  const dispatch = useDispatch();
  console.log(userOwnerId);

  return (
    <>
      <section className={styles.SingleCartItem}>
        <img src={image === "" ? dummy_image : image} alt="" />
        <div className={styles.item_details_container}>
          <h6>{beatName}</h6>
          <div className={styles.details}>
            <p>{`${beatLicense} License`}</p>
            <p>{`${availableCopies} copies left`}</p>
          </div>
          <div className={styles.details}>
            <p>{`${beatSize}mb`}</p>
            <p>{`${totalSales} already sold`}</p>
          </div>
        </div>
        <h2 className={styles.cost_text}>{`NGN ${beatPrice}`}</h2>
        <button
          className={styles.remove_btn}
          onClick={() => dispatch(removeFromCart({ id: beatId }))}
        >
          <img src={remove_icon} alt="" />
        </button>
      </section>
    </>
  );
};

export default SingleCartItem;

SingleCartItem.propTypes = {
  beatName: PropTypes.string,
  beatLicense: PropTypes.string,
  image: PropTypes.string,
  beatId: PropTypes.string,
  beatPrice: PropTypes.string,
  availableCopies: PropTypes.string,
  userOwnerId: PropTypes.string,
  beatSize: PropTypes.string,
  totalSales: PropTypes.string,
};
