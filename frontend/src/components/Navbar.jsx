import { Link } from "react-router";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageSwitcher from "./uicomponents/LanguageSwitcher.jsx";
import DisplayMenuButton from "./uicomponents/DisplayMenuButton.jsx";
import LoginIcon from "@mui/icons-material/Login";
import { useTranslation } from "react-i18next";

const Navbar = (props) => {
  const { t } = useTranslation();

  const toggleTheme = () => {
    if (props.theme === "dark") {
      props.setTheme("light");
      return;
    }
    props.setTheme("dark");
  };

  const icon = () => {
    if (props.theme === "light") {
      return <LightModeIcon />;
    }
    return <DarkModeIcon />;
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">My App</Link>
      </div>

      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/login">
            <LoginIcon />
            <div className="pl-2">{t("login")}</div>
          </Link>
        </li>
        <li className="navbar-item">
          <LanguageSwitcher />
        </li>
      </ul>
      <DisplayMenuButton />
      <button
        className="navbar-icon-button"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {icon()}
      </button>
    </nav>
  );
};

export default Navbar;
