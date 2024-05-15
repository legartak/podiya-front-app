import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import EventPageSection from "./EventPageSection/EventPageSection";

function EventDetails() {
  const { id } = useParams();

  console.log(id);
  // Use the id parameter as needed
  return (
    <>
      <Header />
      <EventPageSection id={id} />
      <Footer />
    </>
  );
}

export default EventDetails;
