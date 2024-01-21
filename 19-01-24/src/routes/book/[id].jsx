import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { HTTP_GET } from "../../utils/http";
import { Link } from "react-router-dom";

export default function Book() {
  const { bookId } = useParams();
  const [bookInfo, setBookInfo] = useState({});

  useEffect(() => {
    HTTP_GET(`/search.json?q=${bookId.replaceAll(" ", "+")}`).then((data) =>
      setBookInfo(data.docs[0])
    );
  }, [bookId]);

  return (
    <>
      <Link className={styles.link} to="/">
        Homepage
      </Link>
      <div className={styles.Book}>
        {bookInfo?.isbn && (
          <>
            <img
              className={styles.image}
              src={`https://covers.openlibrary.org/b/id/${bookInfo.cover_i}-M.jpg`}
              alt={bookInfo?.title}
            />
            <h1 className={styles.title}>{bookInfo?.title}</h1>
            <h2>{bookInfo?.author_name}</h2>
            <span>Ratings: {bookInfo?.ratings_count}</span>
            <h3>What's it about?</h3>
            <p className={styles.about}>{bookInfo?.first_sentence[0]}</p>
          </>
        )}
      </div>
    </>
  );
}
