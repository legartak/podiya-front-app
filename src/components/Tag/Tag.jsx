import PropTypes from "prop-types";
import "@fontsource/montserrat";
import styles from "./Tag.module.css";

export default function Tag(props) {
  return (
    <>
      <div className={styles.TagContainer}>
        <p>{props.title}</p>
      </div>
    </>
  );
}

Tag.propTypes = {
  title: PropTypes.string,
};
