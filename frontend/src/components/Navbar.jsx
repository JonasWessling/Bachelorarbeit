import { Link } from "react-router";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageSwitcher from "./uicomponents/LanguageSwitcher.jsx";
import DisplayMenuButton from "./uicomponents/DisplayMenuButton.jsx";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  userLoggedOut,
} from "../store/features/auth/authSlice.js";
import { useTheme } from "../provider/ThemeProvider.jsx";

const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const { theme, setTheme } = useTheme();

  const isLoggedIn = !!user;

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }
    setTheme("dark");
  };

  const icon = () => {
    if (theme === "light") {
      return <LightModeIcon />;
    }
    return <DarkModeIcon />;
  };

  const loginButton = () => {
    const logOutClicked = () => {
      dispatch(userLoggedOut());
    };

    if (isLoggedIn) {
      return (
        <button
          onClick={logOutClicked}
          type="button"
          title={t("logout")}
          className="navbar-item-button"
        >
          <LogoutIcon />
          <div className="pl-2">{user}</div>
        </button>
      );
    }
    return (
      <Link to="/login" className="navbar-item-button">
        <LoginIcon />
        <div className="pl-2">{t("login")}</div>
      </Link>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">{t("appName")}</Link>
      </div>

      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">{t("home")}</Link>
        </li>
        <li className="navbar-item">{loginButton()}</li>
        <li className="navbar-item">
          <LanguageSwitcher />
        </li>
      </ul>
      <DisplayMenuButton />
      <button
        className="navbar-icon-button"
        onClick={toggleTheme}
        aria-label={t("toggleDarkMode")}
        title={t("toggleDarkMode")}
      >
        {icon()}
      </button>
    </nav>
  );
};

export default Navbar;
