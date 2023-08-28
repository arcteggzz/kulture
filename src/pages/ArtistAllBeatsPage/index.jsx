import styles from "./ArtistAllBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";

const ArtistAllBeatsPage = () => {
  return (
    <>
      <section className={styles.ArtistAllBeatsPage}>
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
