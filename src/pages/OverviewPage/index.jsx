import styles from "./OverviewPage.module.scss";
import Stats from "./Stats/Stats";

const OverviewPage = () => {
  return (
    <>
      <section className={styles.CartPage}>
        <Stats />
      </section>
    </>
  );
};

export default OverviewPage;
