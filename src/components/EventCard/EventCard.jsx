import styles from "./EventCard.module.css";
import "@fontsource/montserrat";

export default function EventCard() {
  return (
    <>
      <div
        className={styles.EventCard}
        style={{ backgroundImage: "url(/event_poster.png)" }}
      >
        <div className={styles.Info}>
          <div className={styles.DateAndEdit}>
            <div className={styles.EventDate}>
              <p>30 серпня 2024</p>
            </div>
          </div>
          <div className={styles.LowerBlock}>
            <div className={styles.EventAndPlace}>
              <div className={styles.EventName}>KLAVDIA PETRIVNA</div>
              <div className={styles.PlaceAndTime}>
                <p>Київ, 18:00 - 20:00</p>
              </div>
            </div>
            <div className={styles.Price}>
              <p>від 549 ₴</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
