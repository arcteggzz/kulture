import styles from "./ProducerAllBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";
import { useGetSingleProducerQuery } from "../../redux/features/producers/producersApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";
import { LoadingIcon } from "../../utils/";

const ProducerAllBeatsPage = () => {
  const userId = useSelector(selectCurrentUserId);

  const {
    data: producedBeats,
    isLoading,
    isSuccess,
    isError,
  } = useGetSingleProducerQuery(userId);

  let content;
  if (isLoading) {
    content = (
      <div className={styles.LoadingIcon_container}>
        <LoadingIcon loading={isLoading} />
      </div>
    );
  } else if (
    isSuccess &&
    producedBeats?.data?.uploaded_beats.length < 1
  ) {
    content = <h3>Empty Uploaded Beats</h3>;
  } else if (isSuccess) {
    content = (
      <>
        {producedBeats?.data?.uploaded_beats.map(
          (producedBeat, index) => {
            const createdDate = new Date(producedBeat.created_at);
            const date = `${createdDate.getDate()}-${createdDate.getMonth()}-${createdDate.getFullYear()}`;

            const size = Math.floor(producedBeat.size / 1024);

            return (
              <SingleBeatDetails
                key={`${producedBeat.genre_id}${index}`}
                variant="producerAllBeats"
                beatImage={producedBeat.imageUrl}
                beatName={producedBeat.name}
                beatId={producedBeat.id}
                beatCost={`${producedBeat.price}`}
                beatGenre={producedBeat.genre}
                beatLicense={producedBeat.license_type}
                beatSize={`${size}kb`}
                beatUploadDate={date}
                beatLikes={producedBeat.like_count}
              />
            );
          }
        )}
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
    <>
      <section className={styles.ProducerAllBeatsPage}>{content}</section>
    </>
  );
};

export default ProducerAllBeatsPage;
