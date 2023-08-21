import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.Footer}>
        <div>
        <p>Terms of Policy</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
        <p>copyright@2023</p>
        </div>
      </footer>
    </>
  );
}
