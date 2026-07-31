import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import Dropdown from "../uicomponents/Dropdown.jsx";
import { useEffect, useState } from "react";
import Checkbox from "../uicomponents/Checkbox.jsx";

const defaultSettings = {
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
  lineHeight: "1.5",
  highContrast: false,
};

const FontMenuModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState(() => {
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
  });

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--font-size",
      settings.fontSize,
    );
    document.documentElement.style.setProperty(
      "--font-family",
      settings.fontFamily,
    );
    document.documentElement.style.setProperty(
      "--line-height",
      settings.lineHeight,
    );
    document.body.classList.toggle("high-contrast", settings.highContrast);

    localStorage.setItem("fontSettings", JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (type, value) => {
    console.log(`Updating ${type} to ${value}`);
    setSettings((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div>
      <div className="modal-header">
        <h2>{t("fontMenu")}</h2>
        <button className="modal-close" onClick={onClose} aria-label="close">
          <CloseIcon />
        </button>
      </div>
      <div className="modal-body">
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
      </div>
      <Checkbox
        id="high-contrast"
        label={t("highContrast")}
        checked={settings.highContrast}
        onChange={(checked) => updateSettings("highContrast", checked)}
      />
    </div>
  );
};

export default FontMenuModal;
