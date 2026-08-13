import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ArticleSection = ({ title, content }) => {
  const { t } = useTranslation();

  return (
    <section className="article-section">
      <h2 className="title">{title}</h2>
      <div className="article-content">
        {content.map((paragraph, index) => (
          <article key={index}>{paragraph}</article>
        ))}
      </div>
      <div className="is-flex is-justify-content-end">
        <button className="btn btn-primary ">{t("moreInfo")}</button>
      </div>
    </section>
  );
};

export default ArticleSection;

ArticleSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.node),
};
