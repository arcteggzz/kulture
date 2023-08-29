import { Outlet } from "react-router-dom";
import styles from "./GeneralPageLayout.module.scss";
import {
  Navbar,
  Footer,
  ForgotPasswordModal,
  LoginModal,
} from "../../components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectloginModalIsOpen } from "../../redux/features/loginModal/loginModalSlice";
import { selectForgotPasswordModalIsOpen } from "../../redux/features/forgotPasswordModal/forgotPasswordModalSlice";

export default function GeneralPageLayout() {
  const forgotPasswordModalOpen = useSelector(selectForgotPasswordModalIsOpen);
  const loginModalIsOpen = useSelector(selectloginModalIsOpen);

  useEffect(() => {
    if (loginModalIsOpen || forgotPasswordModalOpen) {
      document.body.style.position = "fixed";
    } else {
      const scrollY = parseInt(document.body.style.top || "0", 10);

      // Reset the body's styles to re-enable scrolling
      document.body.style.position = "";
      document.body.style.top = "";

      // Scroll to the previous position
      window.scrollTo(0, scrollY);
    }
  }, [loginModalIsOpen, forgotPasswordModalOpen]);

  return (
    <>
      <div className={styles.GeneralPageLayout}>
        <div className={styles.main_container}>
          <div className={styles.Navbar_container}>
            <div className={styles.Navbar_Child_Container}>
              <Navbar />
            </div>
          </div>
          <div className={styles.Outlet_container}>
            <div className={styles.Outlet_Child_Container}>
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>

        <div
          className={
            loginModalIsOpen
              ? styles.modal_container_open
              : styles.modal_container_closed
          }>
          <LoginModal />
        </div>

        <div
          className={
            forgotPasswordModalOpen
              ? styles.modal_container_open
              : styles.modal_container_closed
          }>
          <ForgotPasswordModal />
        </div>
      </div>
    </>
  );
}
