import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SplashPage.module.scss";
import { AnimatedFadeInPage, routePaths } from "../../utils/";
import kulture_logo from "./kulture_logo.png";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(`${routePaths.LANDINGPAGE}`);
    }, 3000);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatedFadeInPage>
        <section className={styles.SplashPage}>
          <img src={kulture_logo} alt="Kulture logo icon" />
        </section>
      </AnimatedFadeInPage>
    </>
  );
};

export default SplashPage;
