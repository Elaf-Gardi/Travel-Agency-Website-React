import React from "react";
import LangingPage from "./component/LangingPage";
import Locations from "./component/Locations";
import Search from "./component/Search";
import About from "./component/AboutUs";
import News from "./component/NewsLetter";
import Footer from "./component/Footer";
import Customers from "./component/Customers";
import Offers from "./component/SpecialOffers";
import ScrollToTop from "react-scroll-to-top";

export default function App() {
  /* const [mode, setModel] = useState(false);*/
  return (
    <div>
      <ScrollToTop />
      <LangingPage />
      <Search />
      <About />
      <Offers />
      <Locations />
      <Customers />
      <News />
      <Footer />
    </div>
  );
}
