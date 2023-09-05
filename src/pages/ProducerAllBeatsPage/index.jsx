import styles from "./ProducerAllBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";
import { useGetSingleProducerQuery } from "../../redux/features/producers/producersApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";

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
    content = <h3 className={styles.feedback}>loading</h3>;
  } else if (isSuccess) {
    content = (
      <>
        {producedBeats?.data?.data?.uploaded_beats.map((producedBeat) => {
          const createdDate = new Date(producedBeat.created_at);
          const date = `${createdDate.getDate()}-${createdDate.getMonth()}-${createdDate.getFullYear()}`;

          const size = Math.floor(producedBeat.size / 1024);
          <SingleBeatDetails
            variant="producerAllBeats"
            beatImage={producedBeat.imageUrl}
            beatName={producedBeat.name}
            beatId={producedBeat.genre_id}
            beatCost={`${producedBeat.price}`}
            beatOwnerName={"John Carter"}
            beatOwnerUsername={"arcteggzz"}
            beatGenre={producedBeat.genre}
            beatLicense={`Premium License `}
            beatSize={size}
            beatUploadDate={date}
            beatLikes={producedBeat.like_count}
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
      <section className={styles.ProducerAllBeatsPage}>
        {content}
        <SingleBeatDetails
          variant="producerAllBeats"
          beatImage={null}
          beatName={"ProducerAllBeatsPage"}
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
          variant="producerAllBeats"
          beatImage={null}
          beatName={"ProducerAllBeatsPage"}
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

export default ProducerAllBeatsPage;
