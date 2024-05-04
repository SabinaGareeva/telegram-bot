import React, { useState, useEffect } from "react";
import css from "./Fantasy.module.css";
import Pagination from "@mui/material/Pagination";
import BookItem from "../../components/BookItem/BookItem";

const Fantasy = () => {
  const [fantasyBook, setFantasyBook] = useState([]);
  const [offset,setOffset]=useState(1)
  const [currentPage, setPage] = useState(1);
  const handleChange=(event, newPage) => {setPage(newPage)}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://openlibrary.org/subjects/fantasy.json?offset=100&limit=50"
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
  }, []);
console.log(fantasyBook)
  return (
    <>
      <div className={css.books_container}>
        {fantasyBook?.works?.map((book) => (
    <BookItem book={book}/>
        ))}
      </div>
      <Pagination count={100} page={currentPage}  color="primary" onChange={handleChange}/>
     
   
    </>
  );
};
export default Fantasy;
