import styles from "./EventItem.module.css";
import PropTypes from "prop-types";
import "@fontsource/montserrat";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventItem({
  image = null,
  name = "Test",
  time,
  price = "1.00",
  city,
  id,
}) {
  const [date, setDate] = useState(new Date(time));
  const [cityName, setCityName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setDate(new Date(time));
    setCityName(city);
  }, [image]);

  return (
    <>
      <div
        className={styles.EventItem}
        onClick={() => {
          navigate(`/catalog/event/${id}`);
        }}
      >
        <img src={image} alt="Event poster" className={styles.EventPoster} />
        <div className={styles.MiddleSection}>
          <p className={styles.EventTitle}>{name}</p>
          <div className={styles.DateAndPlace}>
            <p className="EventDate">
              {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
            </p>
            <p>-</p>
            <p className="City">{cityName}</p>
            <p className="EventTime">
              {date.getUTCHours() < 10
                ? `0${date.getUTCHours()}`
                : date.getUTCHours()}
              :
              {date.getMinutes() < 10
                ? `0${date.getMinutes()}`
                : date.getMinutes()}
            </p>
          </div>
        </div>
        <div className={styles.Price}>від {price} ₴</div>
      </div>
    </>
  );
}

EventItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.object,
  price: PropTypes.string,
  city: PropTypes.string,
  id: PropTypes.number,
};
