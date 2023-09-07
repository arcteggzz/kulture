import styles from "./ArtistFavoriteBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../redux/features/auth/authSlice";
import { useGetSingleArtistesQuery } from "../../redux/features/artistes/artistes";
import { LoadingIcon } from "../../utils";

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
    content = (
      <div className={styles.LoadingIcon_container}>
        <LoadingIcon loading={isLoading} />
      </div>
    );
  } else if (isSuccess && favouriteBeats?.data?.favourite_beats.length < 1) {
    content = <h3>Empty Favourite Beats</h3>;
  } else if (isSuccess) {
    content = (
      <>
        {favouriteBeats.data.favourite_beats.map((favouriteBeat) => {
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
            beatLicense={favouriteBeat.license_type}
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
      <section className={styles.ArtistFavoriteBeatsPage}>{content}</section>
    </>
  );
};

export default ArtistFavoriteBeatsPage;
