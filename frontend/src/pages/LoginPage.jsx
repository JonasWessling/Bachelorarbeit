import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import InputField from "../components/uicomponents/inputField.jsx";
import { useState } from "react";
import { isEmailValid } from "../common/common.js";

const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMailError, setShowMailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      setShowMailError(!isEmailValid(email));
      return;
    }

    setShowMailError(false);
    navigate("/");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;

    setEmail(value);
    if (showMailError) {
      setShowMailError(!isEmailValid(value));
    }
  };

  const handleEmailBlur = () => {
    setShowMailError(!isEmailValid(email));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>{t("login")}</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <InputField
              id="email"
              type="email"
              name="email"
              placeholder={t("email")}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              ariaLabel={t("email")}
              label={t("email")}
              required
              errorMessage={t("invalidEmail")}
              hasError={showMailError}
              onFocus={() => setShowMailError(false)}
              autoComplete="email"
            />
            <InputField
              id="password"
              type="password"
              placeholder={t("password")}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              ariaLabel={t("password")}
              label={t("password")}
              required
              autoComplete="current-password"
            />
          </div>
          <div className="form-group form-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!email || !password || showMailError}
            >
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
        </form>
        <div className="login-footer">
          <a href="/register">{t("register")}</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
