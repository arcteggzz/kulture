import styles from "./UploadPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import { useState } from "react";
import premium_icon from "./images/premium.png";
import standard_icon from "./images/standard.png";
import input_image from "./images/input_image.png";

const UploadPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [licenseType, setLicenseType] = useState("premium");
  const [audioFile, setAudioFile] = useState(null);

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

  return (
    <>
      <AnimatedFadeInPage>
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
                      licenseType === "premium"
                        ? styles.licnese_option_active
                        : styles.licnese_option_inactive
                    }
                    onClick={() => setLicenseType("premium")}
                  >
                    <img src={premium_icon} alt="" />
                    <p className={styles.license_text}>Premium</p>
                    <p className={styles.license_text}>Only 1 purchase</p>
                  </div>
                  <div
                    className={
                      licenseType === "standard"
                        ? styles.licnese_option_active
                        : styles.licnese_option_inactive
                    }
                    onClick={() => setLicenseType("standard")}
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
              <form action=""></form>
            </>
          )}
        </section>
      </AnimatedFadeInPage>
    </>
  );
};

export default UploadPage;
