import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const BibInfoTile = ({ type }) => {
  const { t } = useTranslation();

  const openingHours = [
    { day: t("monday"), hours: "08:00 - 22:00" },
    { day: t("tuesday"), hours: "08:00 - 22:00" },
    { day: t("wednesday"), hours: "08:00 - 22:00" },
    { day: t("thursday"), hours: "08:00 - 22:00" },
    { day: t("friday"), hours: "08:00 - 22:00" },
    { day: t("saturday"), hours: "10:00 - 20:00" },
    { day: t("sunday"), hours: "10:00 - 18:00" },
  ];

  const contactInfo = {
    phone: "(0421) 218 59500",
    email: "suub@suub.uni-bremen.de",
    address: "Universitätsboulevard 12, 28359 Bremen",
  };

  const openHoursSection = () => {
    return (
      <section className="bib-info-tile">
        <div className="bib-info-grid">
          <div className="bib-info-section">
            <h3>{t("openingHours")}</h3>
            <div className="hours-list">
              {openingHours.map((item, idx) => (
                <div key={idx} className="hours-item">
                  <span className="day">{item.day}</span>
                  <span className="time">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  const infoSection = () => {
    return (
      <section className="bib-info-tile">
        <div className="bib-info-grid">
          <div className="bib-info-section">
            <h3>{t("contact")}</h3>
            <div className="contact-list">
              <a
                href={`tel:${contactInfo.phone}`}
                className="contact-item"
                aria-label={`${t("telephone")}: ${contactInfo.phone}`}
              >
              {t("telephone")}: {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="contact-item">
                {contactInfo.email}
              </a>
              <div className="contact-item is-clickable">
                {contactInfo.address}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const socialsSection = () => {
    return (
      <section className="bib-info-tile">
        <div className="bib-info-grid">
          <div className="bib-info-section">
            <h3>{t("socialMedia")}</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
                aria-label={t("facebook")}
              >
                <FacebookIcon aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
                aria-label={t("instagram")}
              >
                <InstagramIcon aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
                aria-label={t("youtube")}
              >
                <YouTubeIcon aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const elementMap = {
    openingHours: openHoursSection(),
    contactInfo: infoSection(),
    socials: socialsSection(),
  };

  return elementMap[type] || null;
};

export default BibInfoTile;

BibInfoTile.propTypes = {
  type: PropTypes.oneOf([
    "openingHours",
    "contactInfo",
    "socials",
    "foodRules",
  ]),
};
