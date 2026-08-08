import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Footer = () => {
  const { t } = useTranslation();

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
        <Link to="/contact">{t("contact")}</Link>
      </div>
    </div>
  );
};

export default Footer;
