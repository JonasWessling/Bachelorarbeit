import { extractTitle, getValidImage } from "../../common/imageUtils.js";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { Themes, useTheme } from "../../provider/ThemeProvider.jsx";

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
    <a href="#" className="unstyled-link">
      <div className="book-card">
        <div className="book-card__image">
          <img src={image} alt={extractTitle(book.title)} />
        </div>

        <div className="book-card__content">
          <h2 className="book-card__title">{book.title}</h2>
          <p className="book-card__author">{book.author}</p>
          <p className="book-card__description">{book.description}</p>
        </div>
      </div>
    </a>
  );
};

export default BookCard;
