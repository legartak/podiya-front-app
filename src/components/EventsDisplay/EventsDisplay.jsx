import PropTypes from "prop-types";
import EventCard from "../EventCard/EventCard";
import styles from "./EventsDisplay.module.css";
import "@fontsource/montserrat";
import { useNavigate } from "react-router-dom";

export default function EventsDisplay({ whereTo = "/", title = "Помилка" }) {
  const navigate = useNavigate();

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
          <p className={styles.EventsTitle}>{title}:</p>
          <p
            className={styles.WatchAll}
            onClick={() => {
              navigate(whereTo);
            }}
          >
            Дивитися всі
          </p>
        </div>
        <div className={styles.Items}>{events}</div>
      </div>
    </>
  );
}

EventsDisplay.propTypes = {
  title: PropTypes.string,
  whereTo: PropTypes.string,
};
