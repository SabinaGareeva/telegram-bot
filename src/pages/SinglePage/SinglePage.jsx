import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SinglePage = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    fetch(`https://openlibrary.org/subjects/fantasy/${id}`)
      .then((res) => res.json)
      .then((data) => setBookData(data));
  }, [id]);
  return (
    <div>
      {bookData && (
        <>
          <h2>{bookData.title}</h2>
          <h2>{bookData.description}</h2>
        </>
      )}
    </div>
  );
};
export default SinglePage;
