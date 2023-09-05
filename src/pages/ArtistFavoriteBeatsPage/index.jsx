import styles from "./ArtistFavoriteBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";
import { useGetSingleArtistesQuery } from "../../redux/features/artistes/artistes";

const ArtistFavoriteBeatsPage = () => {
  const userId = useSelector(selectCurrentUserId);

  const {
    data: favouriteBeats,
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
        {favouriteBeats?.data?.favourite_beats.map((favouriteBeat) => {
          const createdDate = new Date(favouriteBeat.created_at);
          const date = `${createdDate.getDate()}-${createdDate.getMonth()}-${createdDate.getFullYear()}`;

          const size = Math.floor(favouriteBeat.size / 1024);
          <SingleBeatDetails
            variant="artistefavouriteBeats"
            beatImage={favouriteBeat.imageUrl}
            beatName={favouriteBeat.name}
            beatId={favouriteBeat.genre_id}
            beatCost={`${favouriteBeat.price}`}
            beatOwnerName={"John Carter"}
            beatOwnerUsername={"arcteggzz"}
            beatGenre={favouriteBeat.genre}
            beatLicense={`Premium License `}
            beatSize={size}
            beatUploadDate={date}
            beatLikes={favouriteBeat.like_count}
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
      <section className={styles.ArtistFavoriteBeatsPage}>
        {content}
        <SingleBeatDetails
          variant="artisteFavoriteBeats"
          beatImage={null}
          beatName={"ArtistFavoriteBeatsPage"}
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
          variant="artisteFavoriteBeats"
          beatImage={null}
          beatName={"ArtistFavoriteBeatsPage"}
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

export default ArtistFavoriteBeatsPage;
