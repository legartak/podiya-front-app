import styles from "./CatalogSection.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import EventItem from "../EventItem/EventItem";
import ArrowPrev from "../../assets/arrow_prev.svg?react";
import ArrowNext from "../../assets/arrow_next.svg?react";

export default function CatalogSection(props) {
  const [page, setPage] = useState(props.api_link);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const [results, setResults] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(page)
        .then(async (res) => {
          await setResults(res.data.results);
          res.data.previous
            ? setPrevPage(res.data.previous.split("/api/")[1])
            : setPrevPage(null);
          res.data.next
            ? setNextPage(res.data.next.split("/api/")[1])
            : setNextPage(null);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const updatedEvents = results.map(async (result, index) => {
      const temp_date = new Date(result.time);
      const cityRes = await axios.get(`events/cities/${result.city}`);
      const temp_city = cityRes.data.name;
      return (
        <div key={index}>
          <EventItem
            image={result.image}
            name={result.name}
            time={temp_date}
            price={result.price}
            city={temp_city}
            id={result.id}
          />
        </div>
      );
    });

    Promise.all(updatedEvents).then((events) => setEvents(events));
  }, [results]);

  const handleNext = () => {
    setPage(nextPage);
  };

  const handlePrev = () => {
    setPage(prevPage);
  };

  return (
    <>
      <div className={styles.CatalogSection}>
        <div className={styles.TitleSection}>
          <p className={styles.Title}>{props.title}</p>
        </div>
        <div className={styles.Catalogue}>
          {results.length > 0 ? events : <p>Loading...</p>}
        </div>
        <div className={styles.ControlButtons}>
          {prevPage && (
            <div className={styles.PrevButton} onClick={() => handlePrev()}>
              <ArrowPrev />
            </div>
          )}
          {nextPage && (
            <div
              className={styles.NextButton}
              onClick={() => {
                handleNext();
              }}
            >
              <ArrowNext />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

CatalogSection.propTypes = {
  title: PropTypes.string,
  api_link: PropTypes.string,
};
