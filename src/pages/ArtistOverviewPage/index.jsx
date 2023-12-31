import styles from "./ArtistOverviewPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import dummy_chart from "./chart.png";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";
import { useGetSingleArtistesQuery } from "../../redux/features/artistes/artistes";

const ChartDummy = () => {
  return (
    <div className={styles.chartdummy}>
      <img src={dummy_chart} alt="" />
    </div>
  );
};

const ArtistOverviewPage = () => {
  const userId = useSelector(selectCurrentUserId);

  const { data, isLoading, isSuccess, isError } =
    useGetSingleArtistesQuery(userId);

  console.log(data?.data?.attributes);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <>
        <div className={styles.summary_container}>
          <div>
            <p>Totals Views</p>
            <p className={styles.highlight}>
              {data?.data?.attributes?.profile_views}
            </p>
          </div>

          <div>
            {/* <p>Total Amount</p>
          <p className={styles.highlight}>
            NGN {artistesSales.total_amount_spent}
          </p> */}
          </div>

          <div>
            <p>Total Purchases</p>
            <p className={styles.highlight}>
              {data?.data?.attributes?.total_beats_purchased}
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
        <main className={styles.ArtistOverviewPage}>
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

export default ArtistOverviewPage;
