import styles from "./ArtistFavoriteBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";

const ArtistFavoriteBeatsPage = () => {
  return (
    <>
      <section className={styles.ArtistFavoriteBeatsPage}>
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
