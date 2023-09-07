import { useGetAllTrendingCategoriesQuery } from "../../../../../redux/features/trendingCategories/trendingCategoriesApiSlice";
import styles from "./TrendingCategories.module.scss";
import { LoadingIcon } from "../../../../../utils";

const TrendingCategories = () => {
  const {
    data: allTrendingCategories,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllTrendingCategoriesQuery();

  let trendingCategoryContent;
  if (isLoading) {
    trendingCategoryContent = (
      <div className={styles.LoadingIcon_container}>
        <LoadingIcon loading={isLoading} />
      </div>
    );
  } else if (isSuccess) {
    trendingCategoryContent = (
      <>
        {allTrendingCategories.data.data.map((trendingCategory, index) => {
          // console.log(trendingCategory.attributes.user_id);
          return (
            <>
              <p
                className={styles.category}
                key={`${trendingCategory.attributes.user_id}${index}`}
              >
                {trendingCategory.attributes.name}
              </p>
            </>
          );
        })}
      </>
    );
  } else if (isError) {
    trendingCategoryContent = <>something went wrong. Please try again.</>;
  }

  return (
    <>
      <div className={styles.trends}>
        <h3>Trending Categories</h3>
        {trendingCategoryContent}
      </div>
    </>
  );
};

export default TrendingCategories;
