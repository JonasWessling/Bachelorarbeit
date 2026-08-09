import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { eventBus } from "../event/eventbus.js";
import ModalConstants from "../assets/constants/ModalConstants.json";
import EventConstants from "../assets/constants/EventConstants.json";

const Footer = () => {
  const { t } = useTranslation();

  const openContactModal = () => {
    eventBus.emit(ModalConstants.OpenModal, {
      event: EventConstants.ContactModal,
      modalId: ModalConstants.ModalIDs.ContactModal,
    });
  };

  return (
    <div className="custom-footer">
      <div className="custom-footer-item">
        <Link to="/simple-language">{t("simpleLanguage")}</Link>
      </div>
      <div className="custom-footer-item">
        <Link to="/imprint">{t("imprint")}</Link>
      </div>
      <div className="custom-footer-item">
        <Link to="/privacy-policy">{t("privacyPolicy")}</Link>
      </div>
      <div className="custom-footer-item">
        <Link to="/terms-of-service">{t("termsOfService")}</Link>
      </div>
      <div className="custom-footer-item">
        <button onClick={openContactModal}>{t("contact")}</button>
      </div>
    </div>
  );
};

export default Footer;
