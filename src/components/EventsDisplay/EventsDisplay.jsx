import PropTypes from "prop-types";
import EventCard from "../EventCard/EventCard";
import styles from "./EventsDisplay.module.css";
import "@fontsource/montserrat";

export default function EventsDisplay(props) {
  const events = [];

  for (let i = 0; i < 4; i++) {
    events.push(
      <div key={i}>
        <EventCard />
      </div>
    );
  }

  return (
    <>
      <div className={styles.Display}>
        <div className={styles.UpperPart}>
          <p className={styles.EventsTitle}>{props.title}:</p>
          <p className={styles.WatchAll}>Дивитися всі</p>
        </div>
        <div className={styles.Items}>{events}</div>
      </div>
    </>
  );
}

EventsDisplay.propTypes = {
  title: PropTypes.string,
};
