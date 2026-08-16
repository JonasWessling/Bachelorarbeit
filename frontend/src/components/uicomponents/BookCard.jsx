import { extractTitle, getValidImage } from "../../common/imageUtils.js";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const BookCard = ({ book }) => {
  const [image, setImage] = useState("/placeholder.svg");
  const { t } = useTranslation();

  useEffect(() => {
    let cancelled = false;

    const loadImage = async () => {
      const nextImage = await getValidImage(book.images);
      if (!cancelled) {
        setImage(nextImage);
      }
    };

    loadImage();

    return () => {
      cancelled = true;
    };
  }, [book.images]);

  return (
    <a href="#" className="unstyled-link">
      <div className="book-card">
        <div className="book-card__image">
          <img src={image} alt={extractTitle(book.title)} />
        </div>

        <div className="book-card__content">
          <h2 className="book-card__title">{book.title}</h2>
          <p className="book-card__author">{book.author}</p>
          <p className="book-card__description">
            {book.description ?? t("bookPage.noDescription")}
          </p>
        </div>
      </div>
    </a>
  );
};

export default BookCard;
