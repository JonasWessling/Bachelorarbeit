import PropTypes from "prop-types";

const ArticleSection = ({ title, content }) => {
  return (
    <section className="article-section">
      <h2 className="title">{title}</h2>
      <div className="article-content">
        {content.map((paragraph, index) => (
          <article>
            <p key={index}>{paragraph}</p>
          </article>
        ))}
      </div>
      <div className="is-flex is-justify-content-end">
        <button className="btn btn-primary ">More Info</button>
      </div>
    </section>
  );
};

export default ArticleSection;

ArticleSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
};
