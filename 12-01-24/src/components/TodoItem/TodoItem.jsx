import { useState } from "react";
import styles from "./index.module.scss";

const TodoItem = ({ todoItemData, onDelete }) => {
  const [isChecked, setChecked] = useState(todoItemData.completed);

  const onHandleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const onHandleDelete = () => {
    onDelete(todoItemData.id);
  };
  return (
    <div className={styles.TodoItem}>
      <div className={styles.input_par}>
        <input
          className={styles.input}
          type="checkbox"
          checked={isChecked}
          onChange={onHandleCheckboxChange}
        />
        <p className={styles.par}>{todoItemData.title}</p>
      </div>
      <button className={styles.button} onClick={onHandleDelete}>
        Remove
      </button>{" "}
    </div>
  );
};

export default TodoItem;
