import { useTranslation } from "react-i18next";
import InputField from "../components/uicomponents/inputs/InputField.jsx";
import TextArea from "../components/uicomponents/inputs/TextArea.jsx";
import Button from "../components/uicomponents/inputs/Button.jsx";

const ContactPage = () => {
  const { t } = useTranslation();

  const contactForm = () => {
    return (
      <div className="is-card p-3 rounded is-flex is-flex-direction-column">
        <h1 className="mt-3">Ihre Anfrage an: email@email.com</h1>
        <div className="columns is-vcentered mt-5">
          <div className="column is-half">
            <InputField
              id="telefon-number"
              type="tel"
              onChange={() => {}}
              label="Telefon Number"
              placeholder={t("tel_placeholder")}
            />
          </div>
          <div className="column is-half">
            <InputField
              id="email"
              type="email"
              onChange={() => {}}
              label="Email"
              autoComplete="email"
              placeholder={t("email_placeholder")}
              required
            />
          </div>
        </div>
        <TextArea
          id="message"
          label="Ihre Nachricht"
          placeholder={t("text_area_placeholder")}
          onChange={() => {}}
          rows="6"
        />
        <div className="is-flex is-justify-content-flex-end mt-2">
          <Button
            text="Nachricht senden"
            onClick={() => {}}
            variant="primary"
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className="is-flex is-justify-content-center is-align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="p-5">
        <h1 className="">Kontaktdaten</h1>
        {contactForm()}
      </div>
    </div>
  );
};

export default ContactPage;
