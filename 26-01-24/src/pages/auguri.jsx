import styles from "@/styles/Auguri.module.scss";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Auguri() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [inputText, setInputText] = useState("");
  const [confettiColor, setConfettiColor] = useState("blue");

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setConfettiColor(inputText);
  };

  const onHandleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className={styles.Auguri}>
      <h1 className={styles.title}>Auguri!</h1>
      <h2 className={styles.subtitle}>Qual è il tuo colore preferito?</h2>
      <Confetti width={width} height={height} colors={[confettiColor]} />
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input
          className={styles.inputText}
          type="text"
          value={inputText}
          onChange={onHandleChange}
        />
        <input className={styles.button} type="submit" value="Vai!" />
      </form>
    </div>
  );
}
