import styles from "./UploadPage.module.scss";
import { AnimatedFadeInPage, routePaths, LoadingScreen } from "../../utils/";
import { useState } from "react";
import premium_icon from "./images/premium.png";
import standard_icon from "./images/standard.png";
import input_image from "./images/input_image.png";
import uploadImage from "./images/camera.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import {
  selectCurrentAccessToken,
  selectCurrentUserType,
} from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../utils/apiRoutePaths";

const UploadPage = () => {
  const currentUserAccessToken = useSelector(selectCurrentAccessToken);
  const currentUserType = useSelector(selectCurrentUserType);

  const navigate = useNavigate();
  const [audioUploadLoading, setAudioUploadLoading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [formStep, setFormStep] = useState(1);

  const [licenseType, setLicenseType] = useState("Premium");

  const [audioFile, setAudioFile] = useState(null);

  const [audioName, setAudioName] = useState("");
  const [audioPrice, setAudioPrice] = useState("");
  const [audioGenre, setAudioGenre] = useState("");
  const [availableCopies, setAvailableCopies] = useState(1);

  const handleAudioChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    setAudioFile(selectedFile);
  };

  const previousPageHandler = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmitFormOne = (e) => {
    e.preventDefault();
    setFormStep(2);
  };

  const handleSubmitFormTwo = (e) => {
    e.preventDefault();
    setFormStep(3);
    console.log(audioFile);
  };

  const handleSubmitFormThree = (e) => {
    e.preventDefault();

    setAudioUploadLoading(true);

    console.log(audioGenre);

    const bodyFormData = new FormData();
    bodyFormData.append("name", audioName);
    bodyFormData.append("price", audioPrice);
    bodyFormData.append("genre", audioGenre);
    bodyFormData.append("license_type", licenseType);
    // bodyFormData.append("image", null);
    // bodyFormData.append("audio", audioFile);
    bodyFormData.append("available_copies", availableCopies);
    bodyFormData.append("audio", audioFile);

    // const requestOptions = {
    //   method: "POST",
    //   body: bodyFormData,
    //   headers: {
    //     Authorization: `Bearer ${currentUserAccessToken}`,
    //   },
    // };

    // fetch(
    //   `https://kulture-api.onrender.com/api/v1/beats/upload`,
    //   requestOptions
    // )
    //   .then((response) => {
    //     console.log(response);
    //     // response.json();
    //     // console.log(`try:${response.message}`);
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     if (data.status) {
    //       toast.success(`Beat uploaded successfully.`, {
    //         autoClose: 3200,
    //       });
    //       setAudioUploadLoading(false);
    //       setTimeout(() => {
    //         navigate("/login");
    //       }, 3500);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setAudioUploadLoading(false);
    //     setUploadError("No Server Response");
    //     toast.error(`Beat uploaded failed.`, {
    //       autoClose: 3200,
    //     });
    //   });

    axios
      .post(`${BASE_URL}/beats/upload`, bodyFormData, {
        headers: {
          Authorization: `Bearer ${currentUserAccessToken}`,
        },
      })
      .then((response) => {
        // Handle the response from the server
        if (response.status) {
          console.log("Audio uploaded successfully");
          toast.success(`Beat uploaded successfully.`, {
            autoClose: 3200,
          });
          setAudioUploadLoading(false);
          setTimeout(() => {
            navigate(
              routePaths.USERPROFILEPAGEROUTES.PRODUCER.ALL_BEATS_PRODUCED
            );
          }, 3500);
        } else {
          console.error("Audio upload failed");
        }
      })
      .catch((error) => {
        console.error("Network error", error);
        setAudioUploadLoading(false);
        setUploadError("No Server Response");
        toast.error(`Beat uploaded failed.`, {
          autoClose: 3200,
        });
      });
  };

  return (
    <>
      <AnimatedFadeInPage>
        {currentUserType !== "producer" ? (
          <section className={styles.UploadPage}>
            <p>
              Only Producers can upload beats.{" "}
              <Link to={routePaths.SIGNUPPAGE}>Signup</Link> as a producer
            </p>
          </section>
        ) : (
          <section className={styles.UploadPage}>
            {formStep === 1 ? (
              <>
                <form
                  action=""
                  className={styles.form_one}
                  onSubmit={handleSubmitFormOne}
                >
                  <h2>Please select your Licence type:</h2>
                  <div className={styles.licnese_options}>
                    <div
                      className={
                        licenseType === "Premium"
                          ? styles.licnese_option_active
                          : styles.licnese_option_inactive
                      }
                      onClick={() => setLicenseType("Premium")}
                    >
                      <img src={premium_icon} alt="" />
                      <p className={styles.license_text}>Premium</p>
                      <p className={styles.license_text}>Only 1 purchase</p>
                    </div>
                    <div
                      className={
                        licenseType === "Standard"
                          ? styles.licnese_option_active
                          : styles.licnese_option_inactive
                      }
                      onClick={() => setLicenseType("Standard")}
                    >
                      <img src={standard_icon} alt="" />
                      <p className={styles.license_text}>Standard</p>
                      <p className={styles.license_text}>Several purchases</p>
                    </div>
                  </div>
                  <button className={styles.form_button}>Next</button>
                </form>
              </>
            ) : formStep === 2 ? (
              <>
                <form
                  action=""
                  className={styles.form_two}
                  onSubmit={handleSubmitFormTwo}
                >
                  <h2>Select your beat:</h2>
                  <div className={styles.input_container}>
                    <div className={styles.main_input_container}>
                      {" "}
                      <input
                        type="file"
                        accept=""
                        multiple={false}
                        className={styles.file_input}
                        onChange={handleAudioChange}
                      />
                    </div>

                    <img src={input_image} alt="" />
                  </div>
                  <div className={styles.button_container}>
                    <button
                      className={styles.back_button}
                      onClick={() => previousPageHandler()}
                    >
                      Back
                    </button>
                    <button className={styles.form_button}>Next</button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <form action="" onSubmit={handleSubmitFormThree}>
                  {/* <div className={styles.progressBarContainer}>
                  <p>Beats by Winifred</p>
                  <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                  </div>
                  <p className={styles.complete}>Complete</p>
                </div> */}
                  <p className={styles.errorText}>{uploadError}</p>
                  <div className={styles.thirdForm}>
                    <div>
                      <div className={styles.imgContainer}>
                        <div className={styles.uploadBtnContainer}>
                          <div className={styles.upload_btn_wrapper}>
                            <button className={styles.uploadFileBtn}>
                              <img
                                src={uploadImage}
                                alt=""
                                className={styles.uploadImg}
                              />
                              <p>Upload Image</p>
                            </button>
                            <input type="file" name="myBeat" />
                          </div>
                        </div>
                      </div>
                      <p className={styles.max}>
                        Max. File Size<span>: 500MB</span>
                      </p>
                    </div>
                    <div>
                      {/* <div>
                        <div className={styles.label}>
                          <label>Producer(s)</label>
                        </div>
                        <input type="text" name="producer" />
                      </div> */}
                      <div>
                        <div className={styles.label}>
                          <label>Name of Beat</label>
                        </div>
                        <input
                          type="text"
                          name="nameOfBeat"
                          value={audioName}
                          onChange={(e) => setAudioName(e.target.value)}
                        />
                      </div>
                      <div>
                        <div className={styles.label}>
                          <label>Genre</label>
                        </div>
                        <select
                          name="Genre"
                          onChange={(e) => setAudioGenre(e.target.value)}
                        >
                          <option value="Choose genre">Choose genre</option>
                          <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
                          <option value="Afro Pop">Afro Pop</option>
                          <option value="Afro Drill">Afro Drill</option>
                          <option value="Fuji Fusion">Fuji Fusion</option>
                          <option value="Afro Trap">Afro Trap</option>
                        </select>
                      </div>
                      <div>
                        <div className={styles.label}>
                          <label>Price</label>
                        </div>
                        <input
                          type="text"
                          name="price"
                          value={audioPrice}
                          onChange={(e) => setAudioPrice(e.target.value)}
                        />
                      </div>
                      <div>
                        <div className={styles.label}>
                          <label>Available Copies</label>
                        </div>
                        <input
                          type="text"
                          name="availableCopies"
                          value={availableCopies}
                          onChange={(e) => setAvailableCopies(+e.target.value)}
                          disabled={licenseType === "Premium"}
                        />
                      </div>
                      <div className={styles.button_container}>
                        <button
                          className={styles.back_button}
                          onClick={() => previousPageHandler()}
                        >
                          Back
                        </button>
                        <button className={styles.form_button}>Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            )}
          </section>
        )}

        {audioUploadLoading ? (
          <>
            <LoadingScreen loading={audioUploadLoading} />
          </>
        ) : (
          <></>
        )}
      </AnimatedFadeInPage>
      <ToastContainer />
    </>
  );
};

export default UploadPage;
