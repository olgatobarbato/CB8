import { useState } from "react";
import styles from "./index.module.scss";

const AddTodoForm = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const onHandleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: newTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  };

  return (
    <form className={styles.AddTodoForm} onSubmit={onHandleSubmit}>
      <input
        className={styles.textInput}
        type="text"
        placeholder="What are you up to?"
        value={newTodo}
        onChange={onHandleInputChange}
      />
      <input className={styles.submitInput} type="submit" value="Add" />
    </form>
  );
};

export default AddTodoForm;
