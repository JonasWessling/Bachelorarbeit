import { useTranslation } from "react-i18next";
import Searchbar from "./search/Searchbar.jsx";
import BibInfoTile from "../components/uicomponents/BibInfoTile.jsx";
import NewsSection from "../components/NewsSection.jsx";
import FoodRules from "../components/FoodRules.jsx";
import ArticleSection from "../components/uicomponents/ArticleSection.jsx";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="content-padding landing-page">
      <section className="landing-hero rounded">
        <div className="landing-hero__content">
          <span className="landing-hero__eyebrow">{t("landing.hero.eyebrow")}</span>
          <h1 className="is-accent-h1">{t("landing.hero.title")}</h1>
          <p className="landing-hero__text">{t("landing.hero.text")}</p>
          <div className="landing-hero__actions">
            <button className="btn btn-primary rounded">
              {t("landing.hero.searchCatalog")}
            </button>
            <button className="btn btn-secondary rounded">
              {t("landing.hero.learnMore")}
            </button>
          </div>
        </div>

        <div className="landing-hero__stats">
          <div className="stat-card">
            <strong>18k+</strong>
            <span>{t("landing.stats.media")}</span>
          </div>
          <div className="stat-card">
            <strong>24/7</strong>
            <span>{t("landing.stats.digital")}</span>
          </div>
          <div className="stat-card">
            <strong>18</strong>
            <span>{t("landing.stats.studySeats")}</span>
          </div>
        </div>
      </section>

      <Searchbar />
      <div className="columns landing-layout">
        <div className="column is-one-fifths landing-sidebar">
          <NewsSection />
        </div>
        <div className="column is-three-fifths landing-main rounded">
          <section className="news-section">
            <ArticleSection
              title={t("landing.sections.about.title")}
              content={[t("landing.sections.about.content")]}
            />
            <ArticleSection
              title={t("landing.sections.studySpace.title")}
              content={[t("landing.sections.studySpace.content")]}
            />
            <ArticleSection
              title={t("landing.sections.digital.title")}
              content={[t("landing.sections.digital.content")]}
            />

            <ArticleSection
              title={t("landing.sections.community.title")}
              content={[t("landing.sections.community.content")]}
            />

            <FoodRules />
          </section>
        </div>
        <div className="column is-one-fifth landing-aside">
          <BibInfoTile type="openingHours" />
          <BibInfoTile type="contactInfo" />
          <BibInfoTile type="socials" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
