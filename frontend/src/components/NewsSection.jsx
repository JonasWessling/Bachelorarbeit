const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Neue Öffnungszeiten ab September",
      date: "2024-08-15",
      content:
        "Ab September haben wir erweiterte Öffnungszeiten. Montag bis Freitag: 08:00 - 22:00 Uhr",
      category: "announcement",
    },
    {
      id: 2,
      title: "Digitale Sammlung erweitert",
      date: "2024-08-10",
      content:
        "Wir haben 500 neue E-Books und 200 Journals zu unserer digitalen Sammlung hinzugefügt.",
      category: "news",
    },
    {
      id: 3,
      title: "Wir wünschen schöne Ferien!",
      date: "2024-08-01",
      content:
        "Die Bibliothek bleibt vom 15.08 - 22.08 geschlossen. Genießt die Sommerferien!",
      category: "notice",
    },
  ];

  const getCategoryLabel = (category) => {
    const labels = {
      announcement: "Ankündigung",
      news: "Neuerung",
      notice: "Mitteilung",
    };
    return labels[category] || category;
  };

  return (
    <section className="news-section">
      <h2 className="title">Neuigkeiten</h2>
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
          Alle Neuigkeiten ansehen
        </a>
      </div>
    </section>
  );
};

export default NewsSection;
