// import EventCard from "../components/EventCard/EventCard";
import EventsDisplay from "../EventsDisplay/EventsDisplay";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopTags from "../TopTags/TopTags";
import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className={styles.MainPageSection}>
        <EventsDisplay title="На цьому тижні" />
        <EventsDisplay title="Каталог" />
        <TopTags />
      </div>
      <Footer />
    </>
  );
}
