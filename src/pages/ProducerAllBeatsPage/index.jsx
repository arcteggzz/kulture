import styles from "./ProducerAllBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";

const ProducerAllBeatsPage = () => {
  return (
    <>
      <section className={styles.ProducerAllBeatsPage}>
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
