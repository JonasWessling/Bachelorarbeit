import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import Dropdown from "../uicomponents/Dropdown.jsx";
import { useEffect, useRef, useState } from "react";
import Checkbox from "../uicomponents/Checkbox.jsx";

const defaultSettings = {
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
  lineHeight: "1.5",
  highContrast: false,
};

const loadSettings = () => {
  if (typeof window === "undefined") {
    return defaultSettings;
  }

  try {
    const savedSettings = localStorage.getItem("fontSettings");
    if (!savedSettings) {
      return defaultSettings;
    }

    return { ...defaultSettings, ...JSON.parse(savedSettings) };
  } catch (error) {
    console.error("Fehler beim Laden der Font-Einstellungen:", error);
    return defaultSettings;
  }
};

const applySettings = (settings) => {
  document.documentElement.style.setProperty("--font-size", settings.fontSize);
  document.documentElement.style.setProperty(
    "--font-family",
    settings.fontFamily,
  );
  document.documentElement.style.setProperty(
    "--line-height",
    settings.lineHeight,
  );
  document.body.classList.toggle("high-contrast", settings.highContrast);
};

const FontMenuModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState(loadSettings);
  const modalRootRef = useRef(null);

  useEffect(() => {
    applySettings(loadSettings());
  }, []);

  useEffect(() => {
    const modalContentElement = modalRootRef.current?.closest(".modal-content");
    if (!modalContentElement) {
      return undefined;
    }

    modalContentElement.classList.toggle(
      "high-contrast-preview",
      settings.highContrast,
    );

    modalContentElement.classList.toggle(
      "normal-contrast-preview",
      !settings.highContrast,
    );

    return () => {
      modalContentElement.classList.remove("high-contrast-preview");
      modalContentElement.classList.remove("normal-contrast-preview");
    };
  }, [settings.highContrast]);

  const saveSettings = () => {
    localStorage.setItem("fontSettings", JSON.stringify(settings));
    applySettings(settings);
    onClose?.();
  };

  const handleClose = () => {
    onClose?.();
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const updateSettings = (type, value) => {
    setSettings((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div ref={modalRootRef}>
      <div className="modal-header">
        <h1>{t("displaySettings")}</h1>
        <button onClick={handleClose} aria-label="close">
          <CloseIcon />
        </button>
      </div>
      <div className="modal-body">
        <div className="columns">
          <div className="column is-half">
            <Dropdown
              id="font-size"
              name="fontSize"
              label={t("fontSize")}
              value={settings.fontSize}
              onChange={(value) => updateSettings("fontSize", value)}
              options={[
                { value: "14px", label: t("small") },
                { value: "16px", label: t("default") },
                { value: "18px", label: t("medium") },
                { value: "20px", label: t("large") },
                { value: "24px", label: t("extraLarge") },
              ]}
            />
            <Dropdown
              id="font-family"
              name="fontFamily"
              label={t("fontFamily")}
              value={settings.fontFamily}
              onChange={(value) => updateSettings("fontFamily", value)}
              options={[
                { value: "Arial, sans-serif", label: "Arial" },
                { value: "Georgia, serif", label: "Georgia" },
                { value: "Verdana, sans-serif", label: "Verdana" },
                { value: "monospace", label: "Monospace" },
              ]}
            />
          </div>
          <div className="column is-half">
            <Dropdown
              id="line-height"
              name="lineHeight"
              label={t("lineHeight")}
              value={settings.lineHeight}
              onChange={(value) => updateSettings("lineHeight", value)}
              options={[
                { value: "1.2", label: t("small") },
                { value: "1.5", label: t("medium") },
                { value: "1.8", label: t("default") },
                { value: "2.0", label: t("large") },
              ]}
            />
            <Checkbox
              id="high-contrast"
              label={t("highContrast")}
              checked={settings.highContrast}
              onChange={(checked) => updateSettings("highContrast", checked)}
            />
          </div>
        </div>
        <div
          style={{
            fontSize: settings.fontSize,
            fontFamily: settings.fontFamily,
            lineHeight: settings.lineHeight,
          }}
          className={`font-preview`}
        >
          <h2>{t("previewTitle")}</h2>
          <p>{t("previewText")}</p>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn btn-secondary" onClick={handleClose}>
          {t("cancel")}
        </button>
        <button className="btn btn-secondary" onClick={resetSettings}>
          {t("reset")}
        </button>
        <button className="btn btn-primary" onClick={saveSettings}>
          {t("save")}
        </button>
      </div>
    </div>
  );
};

export default FontMenuModal;
