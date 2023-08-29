import styles from "./TrendingProducers.module.scss";
import popularProducer from "../../images/profileImage.png";
import { useGetAllTrendingProducersQuery } from "../../../../../redux/features/trendingProducers/trendingProducersApiSlice";

const TrendingProducers = () => {
  const {
    data: allTrendingProducers,
    isLoading: isLoadingProducer,
    isSuccess: isSuccessProducer,
    isError: isErrorProducer,
  } = useGetAllTrendingProducersQuery();

  let trendingProducerContent;
  if (isLoadingProducer) {
    trendingProducerContent = <h3>loading</h3>;
  } else if (isSuccessProducer) {
    trendingProducerContent = (
      <>
        {allTrendingProducers.data.data.map((trendingProducer, index) => {
          return (
            <>
              <div
                key={`${trendingProducer.data.email}${index}`}
                className={styles.popularProducer}>
                <img
                  src={popularProducer}
                  alt=""
                  className={styles.profileImage}
                />
                <p>{trendingProducer.data.first_name}</p>
              </div>
            </>
          );
        })}
      </>
    );
  } else if (isErrorProducer) {
    trendingProducerContent = <>something went wrong. Please try again.</>;
  }
  return (
    <>
      <div className={styles.Producers}>
        <h3>Popular producers</h3>
        {trendingProducerContent}
      </div>
    </>
  );
};

export default TrendingProducers;
