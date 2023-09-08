import styles from "./ProducerTopBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";
import { useGetSingleProducerQuery } from "../../redux/features/producers/producersApiSlice";
import { LoadingIcon } from "../../utils";

const ProducerTopBeatsPage = () => {
  const userId = useSelector(selectCurrentUserId);

  const {
    data: topBeats,
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
  } else if (isSuccess && topBeats?.data?.beats_liked_by_artistes.length < 1) {
    content = <h3>Your have no top Beat</h3>;
  } else if (isSuccess) {
    content = (
      <>
        {topBeats?.data?.beats_liked_by_artistes.map((topBeat) => {
          const createdDate = new Date(topBeat.created_at);
          const date = `${createdDate.getDate()}-${createdDate.getMonth()}-${createdDate.getFullYear()}`;

          const size = Math.floor(topBeat.size / 1024).toString();
          return (
            <>
              <SingleBeatDetails
                variant="producerAllBeats"
                beatImage={topBeat.imageUrl}
                beatName={topBeat.name}
                beatId={topBeat.genre_id}
                beatCost={`${topBeat.price}`}
                beatOwnerName={"John Carter"}
                beatOwnerUsername={"arcteggzz"}
                beatGenre={topBeat.genre}
                beatLicense={topBeat.license_type}
                beatSize={size}
                beatUploadDate={date}
                beatLikes={topBeat.like_count}
              />
            </>
          );
        })}
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
      <section className={styles.ProducerTopBeatsPage}>{content}</section>
    </>
  );
};

export default ProducerTopBeatsPage;
