import React,{useState,useEffect} from "react";
import css from "./DefaultLayout.module.css";
import Pagination from "@mui/material/Pagination";
import BookItem from "../../components/BookItem/BookItem";

const DefaultLayout = ({request}) => {
  
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
            `https://openlibrary.org/subjects/${request}.json?offset=${offset}&limit=${limit}`
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
  
    return (
      
      <div >
        <div className={css.books_container}>
          {fantasyBook?.works?.map((book) => {
            if (book.lending_edition !== "") {
              return <BookItem book={book} key={book.lending_edition} />;
            }
          })}
        </div>
        <Pagination
          count={Math.floor(fantasyBook?.work_count / 50)}
          page={currentPage}
          color="primary"
          onChange={handleChange}
        />
      </div>
    );
  
};
export default DefaultLayout;