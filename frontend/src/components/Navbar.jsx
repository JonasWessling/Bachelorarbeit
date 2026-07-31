import { Link } from "react-router";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageSwitcher from "./uicomponents/LanguageSwitcher.jsx";
import DisplayMenuButton from "./uicomponents/DisplayMenuButton.jsx";
import { eventBus } from "../event/eventbus.js";
import ModalConstants from "../assets/constants/ModalConstants.json";
import EventConstants from "../assets/constants/EventConstants.json";
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

  const openLoginModal = () => {
    eventBus.emit(ModalConstants.OpenModal, {
      event: EventConstants.showLoginModal,
      modalId: ModalConstants.ModalIDs.LoginModal,
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">My App</Link>
      </div>

      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login">{t("login")}</Link>
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
