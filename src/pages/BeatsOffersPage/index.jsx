import styles from "./BeatsOffersPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
// import { useGetAllBeatsQuery } from "../../redux/features/beatsApiSlice/beatsApiSlice";
import beatImg from "../LandingPage/components/images/beatImg.png";
import heart from "../LandingPage/components/images/Heart.png";
import share from "../LandingPage/components/images/share.png";
import { LoadingIcon } from "../../utils";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/features/cart/cartSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentAccessToken } from "../../redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { LoadingScreen } from "../../utils";
import { BASE_URL } from "../../utils/apiRoutePaths";

const BeatsOffersPage = () => {
  // const dispatch = useDispatch();
  const currentUserAccessToken = useSelector(selectCurrentAccessToken);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [addToCartError, setAddToCartError] = useState("");
  const [addToFavouriteLoading, setAddToFavouriteLoading] = useState(false);
  const [addToFavouriteError, setAddToFavouriteError] = useState("");

  const [allBeatsData, setAllBeatsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // const {
  //   data: allBeats,
  //   isLoading,
  //   isSuccess,
  //   isError,
  // } = useGetAllBeatsQuery();

  const handleAddToCart = (beatId) => {
    setAddToCartLoading(true);

    axios
      .post(`${BASE_URL}/carts/add/${beatId}`, null, {
        headers: {
          Authorization: `Bearer ${currentUserAccessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response) {
          console.log("Beat added to Cart");
          toast.success(`Beat added to Cart`, {
            autoClose: 3200,
          });
          setAddToCartLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setAddToCartLoading(false);
        setAddToCartError("No Server Response");
        toast.error(`Add to Cart failed.`, {
          autoClose: 3200,
        });
      });
  };

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${currentUserAccessToken}`,
    },
    body: null,
  };

  // const handleAddToCart = (beatId) => {
  //   setAddToCartLoading(true);

  //   fetch(`${BASE_URL}/carts/add/${beatId}`, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data) {
  //         console.log("Audio uploaded successfully");
  //         toast.success(`Beat uploaded successfully.`, {
  //           autoClose: 3200,
  //         });
  //         setAddToCartLoading(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setAddToCartLoading(false);
  //       setAddToCartError("No Server Response");
  //       toast.error(`Beat uploaded failed.`, {
  //         autoClose: 3200,
  //       });
  //     });
  // };

  const handleAddToFavorites = (beatId) => {
    setAddToFavouriteLoading(true);

    fetch(`${BASE_URL}/favourites/${beatId}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          console.log("Audio saved successfully");
          toast.success(`Beat saved successfully.`, {
            autoClose: 3200,
          });
          setAddToFavouriteLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setAddToFavouriteLoading(false);
        setAddToFavouriteError("No Server Response");
        toast.error(`Beat saved failed.`, {
          autoClose: 3200,
        });
      });
  };

  useEffect(() => {
    // Define the URL for your GET request
    const apiUrl = `${BASE_URL}/beats`; // Replace with your API endpoint

    // Make the GET request when the component mounts
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        setAllBeatsData(responseData.data.data);
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  let content;
  if (loading) {
    content = (
      <div className={styles.LoadingIcon_container}>
        <LoadingIcon loading={loading} />
      </div>
    );
  } else if (success) {
    content = (
      <>
        {allBeatsData.map((beat) => {
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
                    {beat.attributes.name}
                    {/* <span> • 2 Hours Ago</span> */}
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
                    {/* <p>beat by {beat.attributes.name}</p> */}
                    <p> released on {date}</p>
                    <div className={styles.price}>
                      <p>NGN{beat.attributes.price}</p>
                      <button
                        className={styles.buyBtn}
                        onClick={() => {
                          // dispatch(
                          //   addToCart({
                          //     image: beat.attributes.image_url,
                          //     beatName: beat.attributes.name,
                          //     beatLicense: beat.attributes.licence_type,
                          //     beatId: beat.id,
                          //     beatPrice: beat.attributes.price,
                          //     availableCopies: beat.attributes.avaliable_copies,
                          //     userOwnerId: beat.attributes.user_id,
                          //     totalSales: beat.attributes.total_sales,
                          //     beatSize: beat.attributes.size,
                          //   })
                          // );
                          handleAddToCart(beat.id);
                        }}
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
                  <button
                    className={styles.btnFlex}
                    onClick={() => handleAddToFavorites(beat.id)}
                  >
                    <img src={heart} />
                    <p className={styles.save}>Save for later</p>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  } else if (error) {
    content = (
      <h3 className={styles.feedback}>
        something went wrong. Please try again.
      </h3>
    );
  }

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.BeatsOffersPage}>
          <p className={styles.errorText}>{addToCartError}</p>
          <p className={styles.errorText}>{addToFavouriteError}</p>
          {content}
        </main>
        {addToCartLoading ? (
          <>
            <LoadingScreen loading={addToCartLoading} />
          </>
        ) : (
          <></>
        )}
        {addToFavouriteLoading ? (
          <>
            <LoadingScreen loading={addToFavouriteLoading} />
          </>
        ) : (
          <></>
        )}
      </AnimatedFadeInPage>
      <ToastContainer />
    </>
  );
};

export default BeatsOffersPage;
