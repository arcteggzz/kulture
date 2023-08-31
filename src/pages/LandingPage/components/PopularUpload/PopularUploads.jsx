import styles from "./PopularUploads.module.scss";
import { useGetAllTrendingCategoriesQuery } from "../../../../redux/features/trendingCategories/trendingCategoriesApiSlice";
import image from "../images/upload.png";

const PopularUploads = () => {
  const {
    data: allTrendingCategories,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllTrendingCategoriesQuery();

  let trendingCategoryContent;
  if (isLoading) {
    trendingCategoryContent = <h3 className={styles.feedback}>loading</h3>;
  } else if (isSuccess) {
    trendingCategoryContent = (
      <>
        {allTrendingCategories.data.data.map((trendingCategory, index) => {
          console.log(trendingCategory.attributes);
          return (
            <>
              <div className={styles.uploadDetails} key={`${trendingCategory.attributes.user_id}${index}`}>
                <img
                  className={styles.imgUpload}
                  // src={trendingCategory.attributes.image_url}
                  src={trendingCategory.attributes.image_url }
                  alt="uploaded Image"
                />
                <p
                  className={styles.text}
                  >
                  {trendingCategory.attributes.name} <br />{" "}
                  <span>@{trendingCategory.attributes.genre}</span>
                </p>
              </div>
            </>
          );
        })}
      </>
    );
  } else if (isError) {
    trendingCategoryContent = <h3 className={styles.feedback}>something went wrong. Please try again.</h3>;
  }
  
  return (
    <div className={styles.PopularUploads}>
      <h2>Popular Uploads</h2>
      <section className={styles.uploads}>
        {trendingCategoryContent}
      </section>
    </div>
  );
};

export default PopularUploads;
