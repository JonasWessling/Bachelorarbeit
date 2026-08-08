import InputField from "../components/uicomponents/inputField.jsx";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useState } from "react";
import { isEmailValid } from "../common/common.js";
import { useDispatch } from "react-redux";
import { addUser } from "../store/features/users/usersSlice.js";

const RegisterPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showMailError, setShowMailError] = useState(false);
  const [showMailConfirmError, setShowMailConfirmError] = useState(false);
  const [showPasswordMismatchError, setShowPasswordMismatchError] =
    useState(false);

  //Fields
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");

  const allFieldsFilled = () => {
    return (
      userName.trim() !== "" &&
      password.trim() !== "" &&
      passwordConfirm.trim() !== "" &&
      email.trim() !== "" &&
      emailConfirm.trim() !== ""
    );
  };

  const hasErrors = () => {
    return showMailError || showMailConfirmError || showPasswordMismatchError;
  };

  const validateEmail = () => {
    return isEmailValid(email) && email === emailConfirm;
  };

  const validatePassword = () => {
    return password === passwordConfirm;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      dispatch(addUser(userName, email, password));
      navigate("/login");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (showMailError) {
      setShowMailError(!isEmailValid(value));
    }
  };

  const handleEmailConfirmChange = (e) => {
    const value = e.target.value;
    setEmailConfirm(value);
    if (showMailConfirmError) {
      setShowMailConfirmError(email !== value);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>{t("register")}</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <InputField
              id="username"
              type="text"
              label={t("username")}
              ariaLabel={t("username")}
              placeholder={t("username")}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <InputField
              id="email"
              type="email"
              name="email"
              placeholder={t("email")}
              onChange={handleEmailChange}
              onBlur={() => setShowMailError(!isEmailValid(email))}
              ariaLabel={t("email")}
              label={t("email")}
              required
              errorMessage={t("invalidEmail")}
              hasError={showMailError}
              onFocus={() => setShowMailError(false)}
              autoComplete="email"
            />
            <InputField
              id="email-confirm"
              type="email"
              name="email-confirm"
              placeholder={t("email_confirm")}
              onChange={handleEmailConfirmChange}
              label={t("email_confirm")}
              onBlur={() => setShowMailConfirmError(email !== emailConfirm)}
              required
              errorMessage={t("emailMismatch")}
              hasError={showMailConfirmError}
              onFocus={() => setShowMailConfirmError(false)}
              autoComplete="email"
            />
            <InputField
              id="password"
              name="password"
              type="password"
              label={t("password")}
              placeholder={t("password")}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <InputField
              id="password-confirm"
              name="password-confirm"
              type="password"
              label={t("password_confirm")}
              placeholder={t("password_confirm")}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              onBlur={() =>
                setShowPasswordMismatchError(password !== passwordConfirm)
              }
              autoComplete="current-password"
              hasError={showPasswordMismatchError}
              errorMessage={t("passwordMismatch")}
              onFocus={() => setShowPasswordMismatchError(false)}
              required
            />
          </div>
          <div className="form-group form-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!allFieldsFilled() || hasErrors()}
            >
              {t("register")}
            </button>
            <button
              type="back"
              className="btn btn-secondary"
              onClick={() => navigate("/login")}
            >
              {t("back")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
