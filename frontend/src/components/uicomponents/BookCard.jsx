import { extractTitle, getValidImage } from "../../common/imageUtils.js";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

const BookCard = ({ book, loading }) => {
  const [image, setImage] = useState("/placeholder.svg");

  const style = {
    height: "16px",
    width: "40%",
    borderRadius: "4px",
    marginBottom: "16px",
  };

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

  const BookCardSkeleton = () => {
    return (
      <div className="book-card">
        <div className="book-card__image">
          <Skeleton
            variant="rounded"
            width={120}
            height={180}
            animation="wave"
            sx={{ bgcolor: "grey.800" }}
          />
        </div>

        <div className="book-card__content">
          <Skeleton style={style} variant="rounded" animation="wave" />

          <Skeleton
            style={{
              height: "14px",
              width: "100%",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
            variant="rounded"
            animation="wave"
          />

          <Skeleton
            style={{
              height: "14px",
              width: "80%",
              borderRadius: "4px",
            }}
            variant="rounded"
            animation="wave"
          />
        </div>
      </div>
    );
  };

  if (loading) {
    return BookCardSkeleton();
  }

  return (
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
  );
};

export default BookCard;
