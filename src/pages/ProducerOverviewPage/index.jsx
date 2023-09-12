import styles from "./ProducerOverviewPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import dummy_chart from "./chart.png";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";
import { useGetSingleProducerQuery } from "../../redux/features/producers/producersApiSlice";

const ChartDummy = () => {
  return (
    <div className={styles.chartdummy}>
      <img src={dummy_chart} alt="" />
    </div>
  );
};

const ProducerOverviewPage = () => {
  const userId = useSelector(selectCurrentUserId);

  const { data, isLoading, isSuccess, isError } =
    useGetSingleProducerQuery(userId);

  console.log(data?.data?.attributes);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <>
        <div className={styles.summary_container}>
          <div>
            <p>Totals Profile Views</p>
            <p className={styles.highlight}>
              {data?.data?.attributes?.profile_views}
            </p>
          </div>

          <div>
            <p>Total Purchases(Income)</p>
            <p className={styles.highlight}>
              NGN {data?.data?.attributes?.total_revenue}
            </p>
          </div>

          <div>
            <p>Total Sales</p>
            <p className={styles.highlight}>
              {data?.data?.attributes?.total_beats_sold}
            </p>
          </div>
        </div>
      </>
    );
  } else if (isError) {
    content = <h3>Something went wrong. Serverside Error. Reload Browser.</h3>;
  }

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.ProducerOverviewPage}>
          <h3 className={styles.title}>Stats</h3>
          <div className={styles.main_container}>
            {content}
            <ChartDummy />
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default ProducerOverviewPage;
