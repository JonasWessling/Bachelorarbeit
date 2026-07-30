import { Link } from "react-router";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageSwitcher from "../localization/LanguageSwitcher.jsx";

const Navbar = (props) => {
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
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="navbar-item">
          <LanguageSwitcher />
        </li>
      </ul>
      <button
        className="navbar-theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {icon()}
      </button>
    </nav>
  );
};

export default Navbar;
