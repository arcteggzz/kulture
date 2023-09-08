import styles from "./ArtistAllBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";
import { useGetSingleArtistesQuery } from "../../redux/features/artistes/artistes";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";
import { LoadingIcon } from "../../utils";

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
    content = (
      <div className={styles.LoadingIcon_container}>
        <LoadingIcon loading={isLoading} />
      </div>
    );
  } else if (isSuccess && purchasedBeats?.data?.purchased_beats.length < 1) {
    content = <h3>You have no beat purchased</h3>;
  } else if (isSuccess) {
    content = (
      <>
        {purchasedBeats?.data?.purchased_beats.map((purchasedBeat) => {
          const createdDate = new Date(purchasedBeat.created_at);
          const date = `${createdDate.getDate()}-${createdDate.getMonth()}-${createdDate.getFullYear()}`;

          const size = Math.floor(purchasedBeat.size / 1024).toString();

          return (
            <>
              <SingleBeatDetails
                variant="artistePurchasedBeats"
                beatImage={purchasedBeat.imageUrl}
                beatName={purchasedBeat.name}
                beatId={purchasedBeat.genre_id}
                beatCost={`${purchasedBeat.price}`}
                beatOwnerName={"John Carter"}
                beatOwnerUsername={"arcteggzz"}
                beatGenre={purchasedBeat.genre}
                beatLicense={purchasedBeat.license_type}
                beatSize={size}
                beatUploadDate={date}
                beatLikes={purchasedBeat.like_count}
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
      <section className={styles.ArtistAllBeatsPage}>{content}</section>
    </>
  );
};

export default ArtistAllBeatsPage;
