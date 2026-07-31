import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>{t("login")}</h1>
        </div>
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="login-input">{t("email")}</label>
            <input
              id="login-input"
              type="text"
              placeholder={t("email")}
              onChange={(e) => {}}
              aria-label="email-input"
              required
            />
            <label htmlFor="password-input">{t("password")}</label>
            <input
              id="password-input"
              type="password"
              placeholder={t("password")}
              onChange={(e) => {}}
              aria-label="password-input"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              {t("login")}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              {t("back")}
            </button>
          </div>
        </div>
        <div className="login-footer">
          <a href="/register">{t("register")}</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
