import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";
import BookList from "../../components/bookList";

export default function Homepage() {
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`book/${searchTerm.replaceAll(" ", "+")}`);
    }
  };

  const onHandleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.Homepage}>
      <div className={styles.title}>
        <img
          className={styles.logo}
          src="https://png.pngtree.com/template/20190316/ourmid/pngtree-books-logo-image_80041.jpg"
          alt="logo"
        />
        <h1 className={styles.h1}>Readify</h1>
      </div>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <label className={styles.label} htmlFor="Search">
          🔍{" "}
        </label>
        <input
          className={styles.inputText}
          id="Search"
          value={searchTerm}
          type="text"
          placeholder="Type here..."
          onChange={onHandleChange}
        />
        <input className={styles.inputSubmit} type="submit" value="Search" />
      </form>
      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
    </div>
  );
}
