import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { eventBus } from "../event/eventbus.js";
import ModalConstants from "../assets/constants/ModalConstants.json";
import EventConstants from "../assets/constants/EventConstants.json";
import { useEffect } from "react";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const openContactModal = () => {
    eventBus.emit(ModalConstants.OpenModal, {
      event: EventConstants.ContactModal,
      modalId: ModalConstants.ModalIDs.ContactModal,
    });
  };

  const toggleEasyLanguage = () => {
    const lang = i18n.language;
    const [base, variant] = lang.split("-"); // z.B. ["de", "ES"]

    const next = variant === "ES" ? base : `${base}-ES`;
    i18n.changeLanguage(next);
  };

  return (
    <footer className="custom-footer">
      <div className="custom-footer-item">
        <button onClick={toggleEasyLanguage}>{t("simpleLanguage")}</button>
      </div>
      <div className="custom-footer-item">
        <Link to="#">{t("imprint")}</Link>
      </div>
      <div className="custom-footer-item">
        <Link to="#">{t("privacyPolicy")}</Link>
      </div>
      <div className="custom-footer-item">
        <Link to="#">{t("termsOfService")}</Link>
      </div>
      <div className="custom-footer-item">
        <button onClick={openContactModal}>{t("contact")}</button>
      </div>
    </footer>
  );
};

export default Footer;
