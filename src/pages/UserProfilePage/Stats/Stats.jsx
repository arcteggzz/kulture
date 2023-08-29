import visibility from "../images/visibility.png";
import styles from "./Stats.module.scss";
import Chart from "../Chart/Chart";

const Stats = () => {
  return (
    <div className={styles.Stats}>
      <h3 className={styles.title}>Stats</h3>
      <div className={styles.dFlex}>
        <div className={styles.a}>
          <div className={styles.account}>
            <h3>Sales</h3>
            <img src={visibility} alt="" />
          </div>
          <p>Total Amount</p>
          <p className={styles.amount}>NGN90,000</p>
          <p>Total sales</p>
          <p className={styles.salesCount}>90</p>
          <div className={styles.btnFlex}>
          <button type="button" className={styles.withdrawBtn}>
            Withdraw
          </button>
          <button type="button" className={styles.addBtn}>
            Add account
          </button>
          </div>
        </div>
        <Chart />
      </div>
      
    </div>
  );
};

export default Stats;
