import { useTranslation } from "react-i18next";

const NewsSection = () => {
  const { t } = useTranslation();

  const news = [
    {
      id: 1,
      title: t("newsItems.openingHours.title"),
      date: "2024-08-15",
      content: t("newsItems.openingHours.content"),
      category: "announcement",
    },
    {
      id: 2,
      title: t("newsItems.digitalCollection.title"),
      date: "2024-08-10",
      content: t("newsItems.digitalCollection.content"),
      category: "news",
    },
    {
      id: 3,
      title: t("newsItems.holiday.title"),
      date: "2024-08-01",
      content: t("newsItems.holiday.content"),
      category: "notice",
    },
  ];

  const getCategoryLabel = (category) => {
    const labels = {
      announcement: t("newsCategories.announcement"),
      news: t("newsCategories.news"),
      notice: t("newsCategories.notice"),
    };
    return labels[category] || category;
  };

  return (
    <section className="news-section">
      <h2 className="title">{t("news")}</h2>
      <div className="news-container">
        {news.map((item) => (
          <article key={item.id} className="news-item">
            <div className="news-header">
              <div className="news-title-wrapper">
                <h3>{item.title}</h3>
                <span className={`news-category ${item.category}`}>
                  {getCategoryLabel(item.category)}
                </span>
              </div>
              <time>{item.date}</time>
            </div>
            <div className="news-content">
              <p>{item.content}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="news-footer">
        <a href="#" className="news-link">
          {t("more_news")}
        </a>
      </div>
    </section>
  );
};

export default NewsSection;
