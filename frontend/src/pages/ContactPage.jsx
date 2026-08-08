const ContactPage = () => {
  return (
    <div
      className="is-flex is-justify-content-center is-align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="p-5 has-text-centered" style={{ maxWidth: "420px" }}>
        <h1 className="" style={{ fontSize: "4rem" }}>
          Kontaktdaten
        </h1>
        <p className="mt-3 mb-2">{t("pageNotFound")}</p>
      </div>
    </div>
  );
};

export default ContactPage;
