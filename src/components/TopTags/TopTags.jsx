import styles from "./TopTags.module.css";
import Tag from "../Tag/Tag.jsx";
import "@fontsource/montserrat";

export default function TopTags() {
  const tags = [];

  for (let i = 0; i < 8; i++) {
    tags.push(
      <div key={i}>
        <Tag title="Концерт" />
      </div>
    );
  }

  return (
    <>
      <div className={styles.TagsBlock}>
        <p className={styles.Title}>Топ теги:</p>
        <div className={styles.TagsRow}>{tags}</div>
      </div>
    </>
  );
}
