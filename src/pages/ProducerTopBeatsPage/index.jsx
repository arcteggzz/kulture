import styles from "./ProducerTopBeatsPage.module.scss";
import { SingleBeatDetails } from "../../components";

const ProducerTopBeatsPage = () => {
  return (
    <>
      <section className={styles.ProducerTopBeatsPage}>
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
