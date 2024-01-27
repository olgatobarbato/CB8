import { useState, useEffect } from "react";
import styles from "@/styles/Quote.module.scss";
import getRandomQuote from "random-quote-generator5.0";

export default function Quote() {
  const [isClient, setIsClient] = useState(false);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchNewQuote = () => {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
  };

  return (
    <>
      <div className={styles.Quote}>
        <h1 className={styles.title}>(Not so much) Inspirational Quotes</h1>
        <h2 className={styles.text}>{isClient ? quote : "Prerendered"}</h2>
        <input
          className={styles.button}
          type="button"
          value="Get one"
          onClick={fetchNewQuote}
        />
      </div>
    </>
  );
}
