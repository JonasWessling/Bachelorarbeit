import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>{t("login")}</h1>
        </div>
        <div className="login-form">
          <div className="form-group">
            <input
              type="text"
              placeholder={t("email")}
              onChange={(e) => {}}
              required
              aria-label="Email"
            />
            <input
              type="password"
              placeholder={t("password")}
              onChange={(e) => {}}
              required
              aria-label="Password"
            />
          </div>
        </div>
        <div className="login-footer">
          <button
            type="submit"
            className="btn btn-primary"
            aria-label="Login-Button"
          >
            {t("login")}
          </button>
          <button
            type="register"
            className="btn btn-default"
            aria-label="Register"
          >
            {t("register")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
