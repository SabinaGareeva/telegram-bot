import React from "react";
import css from "./BookItem.module.css";

const BookItem = ({ book }) => {
  return (
    <div key={book.cover_id} className={css.book_container}>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
        alt={book?.title}
        className={css.book_image}
      />
      <h2>{book?.title}</h2>
      <p>{book?.authors?.[0].name}</p>
      <p>{book?.first_publish_year}</p>
    </div>
  );
};
export default BookItem;
