import { Trans, useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import InputField from "../components/uicomponents/inputs/InputField.jsx";
import { useState } from "react";
import { isEmailValid } from "../common/common.js";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../store/features/users/usersSlice.js";
import { userLoggedIn } from "../store/features/auth/authSlice.js";
import Button from "../components/uicomponents/inputs/Button.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMailError, setShowMailError] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);
  const users = useSelector(selectAllUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      setShowMailError(!isEmailValid(email));
      return;
    }

    setShowMailError(false);

    const user = users.find((user) => user.email === email);
    if (user && user.password === password) {
      dispatch(userLoggedIn(user.username));
      navigate("/");
    } else {
      setShowLoginError(true);
      console.log("Login failed");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;

    setEmail(value);
    if (showMailError) {
      setShowMailError(!isEmailValid(value));
    }
  };

  const handleEmailBlur = () => {
    setShowLoginError(false);
    setShowMailError(!isEmailValid(email));
  };

  const link = <Link to="/register">{t("here")}</Link>;

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
              placeholder={t("email_placeholder")}
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
              onBlur={() => setShowLoginError(false)}
              ariaLabel={t("password")}
              label={t("password")}
              required
              autoComplete="current-password"
              hasError={showLoginError}
              errorMessage={t("loginFailed")}
            />
          </div>
          <div className="form-group form-actions">
            <Button
              type="submit"
              variant="primary"
              disabled={!email || !password || showMailError}
              text={t("login")}
            />
            <Button
              onClick={() => navigate("/")}
              text={t("back")}
              type="button"
              variant="secondary"
            />
          </div>
        </form>
        <div className="login-footer">
          <Trans i18nKey="noAccount" components={[<Link to="/register" />]} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
