import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import InputField from "../uicomponents/inputs/InputField.jsx";
import TextArea from "../uicomponents/inputs/TextArea.jsx";

const ContactModal = ({ onClose }) => {
  const { t } = useTranslation();

  const handleClose = () => {
    onClose?.();
  };

  return (
    <div>
      <div className="modal-header">
        <h1>{t("contactForm")}</h1>
        <button onClick={handleClose} aria-label="close">
          <CloseIcon />
        </button>
      </div>
      <div className="modal-body">
        <div className="p-3 is-flex is-flex-direction-column">
          <p>{t("inquiry_text")}</p>
          <p className="mt-5 is-bold">{t("inquiry_address")}</p>
          <div className="columns is-vcentered mt-2">
            <div className="column is-half">
              <InputField
                id="telefon-number"
                type="tel"
                onChange={() => {}}
                label={t("phone_number")}
                placeholder={t("tel_placeholder")}
              />
            </div>
            <div className="column is-half">
              <InputField
                id="email"
                type="email"
                onChange={() => {}}
                label={t("email")}
                autoComplete="email"
                placeholder={t("email_placeholder")}
                required
              />
            </div>
          </div>
          <TextArea
            id="message"
            label={t("message")}
            placeholder={t("text_area_placeholder")}
            onChange={() => {}}
            rows="6"
          />
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn btn-secondary" onClick={handleClose}>
          {t("cancel")}
        </button>
        <button className="btn btn-primary" onClick={handleClose}>
          {t("sendMessage")}
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
