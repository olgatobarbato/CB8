import OpenAI from "openai";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const MyApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: MyApiKey,
  dangerouslyAllowBrowser: true,
});

export default function Home() {
  const [userRequest, setUserRequest] = useState();
  const [inputValue, setInputValue] = useState("");

  const onHandleChatGPT3 = async (e) => {
    e.preventDefault();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "system", content: inputValue }],
    });

    setUserRequest(completion.choices[0].message.content);
    setInputValue("");
  };

  const onHandleInputValue = (e) => setInputValue(e.target.value);

  return (
    <>
      <div className={styles.OpenAI}>
        <h2>ChatGPT 3.5</h2>
        <h1 className={styles.h1}>Come posso aiutarti oggi?</h1>
        <form onSubmit={onHandleChatGPT3}>
          <input
            className={styles.input}
            type="text"
            value={inputValue}
            onChange={onHandleInputValue}
            placeholder="Messaggio ChatGPT..."
          />
          <input className={styles.button} type="submit" value="Vai" />
        </form>
        <p className={styles.text}>{userRequest}</p>
        <p className={styles.footer}>
          ChatGPT può commettere errori. Considera di verificare le informazioni
          importanti.
        </p>
      </div>
    </>
  );
}
