import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CatalogSection from "../CatalogSection/CatalogSection";
import "@fontsource/montserrat";

export default function AllEvents() {
  return (
    <>
      <Header />
      <CatalogSection title="Каталог" api_link="events/?page_size=4" />
      <Footer />
    </>
  );
}
