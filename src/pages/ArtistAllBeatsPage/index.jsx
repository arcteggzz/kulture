import styles from "./ArtistAllBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";
import { useGetSingleArtistesQuery } from "../../redux/features/artistes/artistes";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";

const ArtistAllBeatsPage = () => {
  const userId = useSelector(selectCurrentUserId);

  const {
    data: purchasedBeats,
    isLoading,
    isSuccess,
    isError,
  } = useGetSingleArtistesQuery(userId);

  let content;
  if (isLoading) {
    content = <h3 className={styles.feedback}>loading</h3>;
  } else if (isSuccess) {
    content = (
      <>
        {purchasedBeats?.data?.purchased_beats.map((purchasedBeat) => {
          const createdDate = new Date(purchasedBeat.created_at);
          const date = `${createdDate.getDate()}-${createdDate.getMonth()}-${createdDate.getFullYear()}`;

          const size = Math.floor(purchasedBeat.size / 1024);
          <SingleBeatDetails
            variant="artistePurchasedBeats"
            beatImage={purchasedBeat.imageUrl}
            beatName={purchasedBeat.name}
            beatId={purchasedBeat.genre_id}
            beatCost={`${purchasedBeat.price}`}
            beatOwnerName={"John Carter"}
            beatOwnerUsername={"arcteggzz"}
            beatGenre={purchasedBeat.genre}
            beatLicense={`Premium License `}
            beatSize={size}
            beatUploadDate={date}
            beatLikes={purchasedBeat.like_count}
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
      <section className={styles.ArtistAllBeatsPage}>
        {content}
        <SingleBeatDetails
          variant="artistePurchasedBeats"
          beatImage={null}
          beatName={"ArtistAllBeatsPage"}
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
          variant="artistePurchasedBeats"
          beatImage={null}
          beatName={"ArtistAllBeatsPage"}
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

export default ArtistAllBeatsPage;
