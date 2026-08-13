import { getValidImage } from "../../common/imageUtils.js";
import { useEffect, useState } from "react";

const BookCard = ({ book }) => {
  const [image, setImage] = useState("/placeholder.svg");

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
    <div className="book-card">
      <div className="book-card__image">
        <img src={image} alt={"Book cover for " + book.title} />
      </div>

      <div className="book-card__content">
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>
        <p className="book-card__description">{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
