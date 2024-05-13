import "@fontsource/montserrat/500.css";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        <p>&copy; {new Date().getFullYear()} EMA_team</p>
      </div>
    </>
  );
}
