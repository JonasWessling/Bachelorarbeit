import Searchbar from "./search/Searchbar.jsx";
import BibInfoTile from "../components/uicomponents/BibInfoTile.jsx";
import NewsSection from "../components/NewsSection.jsx";
import FoodRules from "../components/FoodRules.jsx";
import ArticleSection from "../components/uicomponents/ArticleSection.jsx";

const LandingPage = () => {
  return (
    <div className="content-padding landing-page">
      <section className="landing-hero rounded">
        <div className="landing-hero__content">
          <span className="landing-hero__eyebrow">Willkommen</span>
          <h1 className="is-accent-h1">
            Bibliothek – Lernraum, Recherche und Austausch
          </h1>
          <p className="landing-hero__text">
            Entdecken Sie digitale Angebote, ruhige Arbeitsplätze und
            inspirierende Veranstaltungen – alles an einem Ort für Studium,
            Forschung und Alltag.
          </p>
          <div className="landing-hero__actions">
            <button className="btn btn-primary rounded">
              Katalog durchsuchen
            </button>
            <button className="btn btn-secondary rounded">Mehr erfahren</button>
          </div>
        </div>

        <div className="landing-hero__stats">
          <div className="stat-card">
            <strong>18k+</strong>
            <span>Medien</span>
          </div>
          <div className="stat-card">
            <strong>24/7</strong>
            <span>Digital</span>
          </div>
          <div className="stat-card">
            <strong>18</strong>
            <span>Studienplätze</span>
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
              title="Über die Bibliothek"
              content={[
                <p>
                  Unsere Bibliothek verbindet moderne Informationsangebote mit
                  einer angenehmen Lernumgebung. Neben klassischen Medien stehen
                  Ihnen digitale Ressourcen, flexible Arbeitsplätze und
                  verschiedene Serviceangebote zur Verfügung. Ob für
                  konzentriertes Arbeiten, kreative Projekte oder kurze
                  Recherche – die Bibliothek bietet Ihnen Raum, Ruhe und
                  Unterstützung.
                </p>,
              ]}
            />
            <ArticleSection
              title="Ruhiger Lernort"
              content={[
                <p>
                  Die Bibliothek ist ein Ort der Ruhe und Konzentration. Helle
                  Räume, ergonomische Arbeitsplätze und eine angenehme
                  Geräuschkulisse schaffen ideale Bedingungen für produktives
                  Lernen. Besucherinnen und Besucher finden hier Inspiration,
                  Unterstützung und vielfältige Möglichkeiten, Wissen zu
                  vertiefen.
                </p>,
              ]}
            />
            <ArticleSection
              title="Digitale Angebote"
              content={[
                <p>
                  Neben einem umfangreichen Medienbestand bietet die Bibliothek
                  zahlreiche digitale Services: Online-Kataloge, E‑Books,
                  Datenbanken und Tools zur wissenschaftlichen Recherche. Diese
                  Angebote ermöglichen flexibles, ortsunabhängiges Arbeiten und
                  unterstützen Sie bei Studium, Forschung und Projekten.
                </p>,
              ]}
            />

            <ArticleSection
              title="Community und Veranstaltungen"
              content={[
                <p>
                  Als Treffpunkt für Wissensinteressierte veranstaltet die
                  Bibliothek regelmäßig Workshops, Lesungen und
                  Informationsangebote. Die offenen Räume fördern Austausch,
                  Zusammenarbeit und gemeinsames Lernen – sowohl für Studierende
                  als auch für externe Gäste.
                </p>,
              ]}
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
