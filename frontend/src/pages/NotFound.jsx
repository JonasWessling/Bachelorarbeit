import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div
      className="is-flex is-justify-content-center is-align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="p-5 has-text-centered" style={{ maxWidth: "420px" }}>
        <h1 className="is-title is-bold" style={{ fontSize: "4rem" }}>
          404
        </h1>
        <p className="mt-3 mb-2">{t("pageNotFound")}</p>
        <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>
          {t("goHome")}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
