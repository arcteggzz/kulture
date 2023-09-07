import styles from "./LoginCatchPage.module.scss";
import { AnimatedFadeInPage } from "../../utils/";
import { useDispatch } from "react-redux";
import { openLoginModal } from "../../redux/features/loginModal/loginModalSlice";
import { useEffect } from "react";
import { LoginModal } from "../../components";
import { useSelector } from "react-redux";
import { selectloginModalIsOpen } from "../../redux/features/loginModal/loginModalSlice";

const LoginCatchPage = () => {
  const dispatch = useDispatch();

  const loginModalIsOpen = useSelector(selectloginModalIsOpen);

  useEffect(() => {
    dispatch(openLoginModal());
  });

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LoginCatchPage}>LoginCatchPage</main>

        <div
          className={
            loginModalIsOpen
              ? styles.modal_container_open
              : styles.modal_container_closed
          }
        >
          <LoginModal />
        </div>
      </AnimatedFadeInPage>
    </>
  );
};

export default LoginCatchPage;
