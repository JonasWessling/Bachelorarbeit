import { useState } from "react";

const FontMenu = () => {
  const [fontSize, setFontSize] = useState("16px");
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif");
  const [lineHeight, setLineHeight] = useState("1.5");

  const updateSettings = (type, value) => {
    if (type === "fontSize") {
      setFontSize(value);
      document.documentElement.style.setProperty("--font-size", value);
    }
    if (type === "fontFamily") {
      setFontFamily(value);
      document.documentElement.style.setProperty("--font-family", value);
    }
    if (type === "lineHeight") {
      setLineHeight(value);
      document.documentElement.style.setProperty("--line-height", value);
    }
  };

  return (
    <div>
      <h1>Darstellung anpassen</h1>
      <label>
        Schriftgröße:
        <select
          value={fontSize}
          onChange={(e) => updateSettings("fontSize", e.target.value)}
        >
          <option value="14px">Klein</option>
          <option value="16px">Normal</option>
          <option value="18px">Groß</option>
          <option value="20px">Sehr groß</option>
        </select>
      </label>
      <label>
        Schriftart:
        <select
          value={fontFamily}
          onChange={(e) => updateSettings("fontFamily", e.target.value)}
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="Verdana, sans-serif">Verdana</option>
          <option value="monospace">Monospace</option>
        </select>
      </label>

      <label>
        Zeilenabstand:
        <select
          value={lineHeight}
          onChange={(e) => updateSettings("lineHeight", e.target.value)}
        >
          <option value="1.2">Eng</option>
          <option value="1.5">Normal</option>
          <option value="1.8">Groß</option>
          <option value="2">Sehr groß</option>
        </select>
      </label>
      <main>
        <h2>Beispieltext</h2>
        <p>
          Dieser Text passt sich automatisch an die gewählten Einstellungen an.
          Nutzer können Schriftgröße, Schriftart und Zeilenabstand verändern.
        </p>
      </main>
    </div>
  );
};

export default FontMenu;
