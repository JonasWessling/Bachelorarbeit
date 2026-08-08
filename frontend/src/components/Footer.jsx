import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="custom-footer">
      <div className="custom-footer-item">
        <a href="#">{t("simpleLanguage")}</a>
      </div>
      <div className="custom-footer-item">
        <a href="#">{t("imprint")}</a>
      </div>
      <div className="custom-footer-item">
        <a href="#">{t("privacyPolicy")}</a>
      </div>
      <div className="custom-footer-item">
        <a href="#">{t("termsOfService")}</a>
      </div>
      <div className="custom-footer-item">
        <a href="/contact">{t("contact")}</a>
      </div>
    </div>
  );
};

export default Footer;
