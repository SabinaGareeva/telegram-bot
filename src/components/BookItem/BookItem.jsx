import React from "react";
import css from "./BookItem.module.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
  return (
<Link to={`/fantasy/${book.cover_edition_key}`}>
    <div className={css.book__container}>
      {book.cover_id ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
          alt={book?.title}
          className={css.book__image}
        />
      ) : (
        <div className={css.book__replacement_img}></div>
      )}

      <h3 className={css.book__title}>{book?.title}</h3>
      <p className={css.book__authors}>{book?.authors?.[0].name}</p>
      <p className={css.book__year}>{book?.first_publish_year}</p>
      <Button variant="contained">Add book</Button>
    </div></Link>
  );
};
export default BookItem;
