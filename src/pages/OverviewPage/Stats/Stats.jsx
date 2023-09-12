import visibility from "../images/visibility.png";
import styles from "./Stats.module.scss";
import Chart from "../Chart/Chart";
import { useGetSingleProducerQuery } from "../../../redux/features/producers/producersApiSlice";
import { useGetSingleArtistesQuery } from "../../../redux/features/artistes/artistes";
import { useSelector } from "react-redux";
import {
  selectCurrentUserId,
  selectCurrentUserType,
} from "../../../redux/features/auth/authSlice";
import { LoadingIcon } from "../../../utils";

const Stats = () => {
  const userId = useSelector(selectCurrentUserId);

  const userType = useSelector(selectCurrentUserType);

  const {
    data: producerStat,
    isLoading: isLoadingProducerStat,
    isSuccess: isSuccessProducerStat,
    isError: isErrorProducerStat,
  } = useGetSingleProducerQuery(userId);

  const producerSales = producerStat?.data?.attributes;

  let producerSalesContent;
  if (isLoadingProducerStat) {
    producerSalesContent = (
      <div className={styles.LoadingIcon_container}>
        <LoadingIcon loading={isLoadingProducerStat} />
      </div>
    );
  } else if (isSuccessProducerStat) {
    producerSalesContent = (
      <>
        <div className={styles.a}>
          <div className={styles.account}>
            <h3>Sales</h3>
            <img src={visibility} alt="" />
          </div>
          <p>Total Beats</p>
          <p className={styles.amount}>{producerSales.total_beats}</p>
          <p>Views</p>
          <p className={styles.amount}>{producerSales.profile_views}</p>
          <p>Total Amount</p>
          <p className={styles.amount}>NGN {producerSales.total_revenue}</p>
          <p>Total sales</p>
          <p className={styles.salesCount}>{producerSales.total_beats_sold}</p>
          <div className={styles.btnFlex}>
            <button type="button" className={styles.withdrawBtn}>
              Withdraw
            </button>
            <button type="button" className={styles.addBtn}>
              Add account
            </button>
          </div>
        </div>
      </>
    );
  } else if (isErrorProducerStat) {
    producerSalesContent = (
      <h3 className={styles.feedback}>
        something went wrong. Please try again.
      </h3>
    );
  }

  const {
    data: artistesStat,
    isLoading,
    isSuccess,
    isError,
  } = useGetSingleArtistesQuery(userId);

  const artistesSales = artistesStat?.data?.attributes;
  let content;
  if (isLoading) {
    content = (
      <div className={styles.LoadingIcon_container}>
        <LoadingIcon loading={isLoading} />
      </div>
    );
  } else if (isSuccess) {
    content = (
      <>
        <div className={styles.a}>
          <div className={styles.account}>
            <h3>Purchases</h3>
            <img src={visibility} alt="" />
          </div>
          <p>Totals Views</p>
          <p className={styles.salesCount}>{artistesSales.profile_views}</p>
          {/* <p>Total Amount</p>
          <p className={styles.amount}>
            NGN {artistesSales.total_amount_spent}
          </p> */}
          <p>Total Purchases</p>
          <p className={styles.salesCount}>
            {artistesSales.total_beats_purchased}
          </p>
          <div className={styles.btnFlex}>
            <button type="button" className={styles.addPurBtn}>
              Add account
            </button>
          </div>
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <h3 className={styles.feedback}>
        something went wrong. Please try again.
      </h3>
    );
  }

  return (
    <div className={styles.Stats}>
      <h3 className={styles.title}>Stats</h3>
      <div className={styles.dFlex}>
        {userType === "producer" ? producerSalesContent : content}
        <Chart />
      </div>
    </div>
  );
};

export default Stats;
