import styles from "./EventPageSection.module.css";
import PropTypes from "prop-types";
import axios from "../../../api/axios";
import { useEffect } from "react";
import { useState } from "react";
import "@fontsource/montserrat";

export default function EventPageSection(props) {
  const [result, setResult] = useState(null);
  const [eventDate, setEventDate] = useState();
  useEffect(() => {
    const fetchData = async () => {
      console.log(props.id);
      await axios
        .get(`events/${props.id}/`)
        .then(async (res) => {
          setResult(res.data);
          setEventDate(new Date(res.data.time));
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  console.log(eventDate);

  return (
    <>
      <div className={styles.EventPageSection}>
        {result ? (
          <>
            <div className={styles.MainPart}>
              <img
                src={result.image}
                alt="Event poster"
                className={styles.EventPoster}
              />
              <div className={styles.NameSection}>
                <p className={styles.EventTitle}>{result.name}</p>
                <div className={styles.DateAndPlace}>
                  <p className="EventDate">
                    {eventDate.getDate()}/{eventDate.getMonth() + 1}/
                    {eventDate.getFullYear()}
                  </p>
                  <p className="EventTime">
                    {eventDate.getUTCHours() < 10
                      ? `0${eventDate.getUTCHours()}`
                      : eventDate.getUTCHours()}
                    :
                    {eventDate.getMinutes() < 10
                      ? `0${eventDate.getMinutes()}`
                      : eventDate.getMinutes()}
                  </p>
                </div>
              </div>
              <div className={styles.Price}>від {result.price} ₴</div>
            </div>
            <div className={styles.AboutEvent}>
              <p className={styles.Title}>Про подію:</p>
              <p className={styles.Description}>{result.description}</p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

EventPageSection.propTypes = {
  id: PropTypes.string,
};
