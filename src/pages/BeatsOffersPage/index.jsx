import styles from "./BeatsOffersPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { useGetAllBeatsQuery } from "../../redux/features/beatsApiSlice/beatsApiSlice";
import beatImg from "../LandingPage/components/images/beatImg.png";
import heart from "../LandingPage/components/images/Heart.png";
import share from "../LandingPage/components/images/share.png";
import { LoadingIcon } from "../../utils";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const BeatsOffersPage = () => {
  const dispatch = useDispatch();
  const {
    data: allBeats,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllBeatsQuery();

  console.log(allBeats);

  let content;
  if (isLoading) {
    content = (
      <div className={styles.LoadingIcon_container}>
        <LoadingIcon loading={isLoading} />
      </div>
    );
  } else if (isSuccess) {
    content = (
      <>
        {allBeats.data.data.map((beat) => {
          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          // console.log(beat.attributes);
          const createdDate = new Date(beat.producer.created_at);
          const date = `${createdDate.getDate()} ${
            months[createdDate.getMonth()]
          } ${createdDate.getFullYear()}`;

          return (
            <>
              <div className={styles.beats}>
                <div className={styles.beatProfile}>
                  <img
                    src={beat.attributes.image_url}
                    // alt="Profile Image"
                    className={styles.profileImage}
                  />
                  <p>
                    {beat.attributes.name} <span>@ohuly</span>{" "}
                    <span> • 2 Hours Ago</span>
                  </p>
                </div>
                <div className={styles.beatDetails}>
                  <img src={beatImg} alt="Beat" className={styles.beatImg} />
                  <div className={styles.audio_container}>
                    <audio
                      src={beat.attributes.file_url}
                      controls
                      controlsList="nodownload noplaybackrate"
                      className={styles.custom_audio}
                    />
                  </div>

                  <div>
                    <h2>{beat.attributes.genre}</h2>
                    <p>beat by {beat.attributes.name} @ohuly </p>
                    <p> released on {date}</p>
                    <div className={styles.price}>
                      <p>NGN{beat.attributes.price}</p>
                      <button
                        className={styles.buyBtn}
                        onClick={() =>
                          dispatch(
                            addToCart({
                              image: beat.attributes.image_url,
                              beatName: beat.attributes.name,
                              beatLicense: beat.attributes.licence_type,
                              beatId: beat.id,
                              beatPrice: beat.attributes.price,
                              availableCopies: beat.attributes.avaliable_copies,
                              userOwnerId: beat.attributes.user_id,
                              totalSales: beat.attributes.total_sales,
                              beatSize: beat.attributes.size,
                            })
                          )
                        }
                      >
                        BUY NOW
                      </button>
                      {/* <button type="button" className={styles.editBtn}>Edit</button>
                <button type="button" className={styles.deleteBtn}>
                  <img src={deleteButton} alt="" />
                </button> */}
                    </div>
                  </div>
                </div>
                <div className={styles.shareSave}>
                  <div className={styles.btnFlexx}>
                    <img src={share} />
                    <button className={styles.shareBtn}>Share</button>
                  </div>
                  <div className={styles.btnFlex}>
                    <img src={heart} />
                    <button className={styles.saveBtn}>Save for later</button>
                  </div>
                </div>
              </div>
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
      <AnimatedFadeInPage>
        <main className={styles.BeatsOffersPage}>{content}</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default BeatsOffersPage;
