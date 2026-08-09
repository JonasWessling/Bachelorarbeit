import Searchbar from "./search/Searchbar.jsx";
import BibInfoTile from "../components/uicomponents/BibInfoTile.jsx";
import NewsSection from "../components/NewsSection.jsx";
import FoodRules from "../components/FoodRules.jsx";

const LandingPage = () => {
  return (
    <div className="content-padding">
      <h1 className="is-accent-h1">Start</h1>
      <Searchbar />
      <div className="columns">
        <div className="column is-one-fifths">
          <NewsSection />
        </div>
        <div className="column is-three-fifths">
          <FoodRules />
        </div>
        <div className="column is-one-fifth">
          <BibInfoTile type="openingHours" />
          <BibInfoTile type="contactInfo" />
          <BibInfoTile type="socials" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
