import React, { useState, useEffect } from "react";
import css from "./Fantasy.module.css";
import Pagination from "@mui/material/Pagination";
import BookItem from "../../components/BookItem/BookItem";

const Fantasy = () => {
  const [fantasyBook, setFantasyBook] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setPage] = useState(1);
  const limit = 50;
  const handleChange = (event, newPage) => {
    setPage(newPage);
    setOffset(limit * (newPage - 1));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/subjects/fantasy.json?offset=${offset}&limit=${limit}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setFantasyBook(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [offset]);
  console.log(offset);
  return (
    <div className={css.container}>
      <div className={css.books_container}>
        {fantasyBook?.works?.map((book) => (
          <BookItem book={book} key={book.cover_id} />
        ))}
      </div>
      <Pagination
        count={fantasyBook.work_count / 50}
        page={currentPage}
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
};
export default Fantasy;
