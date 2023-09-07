import styles from "./ProducerTopBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";
import { useGetSingleProducerQuery } from "../../redux/features/producers/producersApiSlice";

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
    content = <h3 className={styles.feedback}>loading</h3>;
  } else if (isSuccess) {
    content = (
      <>
        {topBeats?.data?.data?.beats_liked_by_artistes.map((topBeat) => {
          const createdDate = new Date(topBeat.created_at);
          const date = `${createdDate.getDate()}-${createdDate.getMonth()}-${createdDate.getFullYear()}`;

          const size = Math.floor(topBeat.size / 1024);
          <SingleBeatDetails
            variant="producerAllBeats"
            beatImage={topBeat.imageUrl}
            beatName={topBeat.name}
            beatId={topBeat.genre_id}
            beatCost={`${topBeat.price}`}
            beatOwnerName={"John Carter"}
            beatOwnerUsername={"arcteggzz"}
            beatGenre={topBeat.genre}
            beatLicense={`Premium License `}
            beatSize={size}
            beatUploadDate={date}
            beatLikes={topBeat.like_count}
          />;
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
      <section className={styles.ProducerTopBeatsPage}>
        {content}
        <SingleBeatDetails
          variant="producerTopBeats"
          beatImage={null}
          beatName={"producerTopBeats"}
          beatId={"8965ggy89"}
          beatCost={`400,000`}
          beatOwnerName={"John Carter"}
          beatOwnerUsername={"arcteggzz"}
          beatGenre={"AfroPop"}
          beatLicense={`Premium License `}
          beatSize={"14mb"}
          beatUploadDate={"24-12-2022"}
          beatLikes={35}
        />
        <SingleBeatDetails
          variant="producerTopBeats"
          beatImage={null}
          beatName={"producerTopBeats"}
          beatId={"8965ggy89"}
          beatCost={`400,000`}
          beatOwnerName={"John Carter"}
          beatOwnerUsername={"arcteggzz"}
          beatGenre={"AfroPop"}
          beatLicense={`Premium License `}
          beatSize={"14mb"}
          beatUploadDate={"24-12-2022"}
          beatLikes={35}
        />
      </section>
    </>
  );
};

export default ProducerTopBeatsPage;
