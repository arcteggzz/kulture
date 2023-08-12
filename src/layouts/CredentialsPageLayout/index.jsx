import { Outlet } from "react-router-dom";
import styles from "./CredentialsPageLayout.module.scss";

export default function PublicPageLayout() {
  return (
    <>
      <div className={styles.CredentialsPageLayout}>
        <div className={styles.main_container}>
          <div className={styles.Outlet_container}>
            <div className={styles.Outlet_Child_Container}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
