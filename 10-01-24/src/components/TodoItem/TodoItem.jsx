import { useState } from "react";
import "./index.scss";

const TodoItem = ({ todoItemData, onDelete }) => {
  const [isChecked, setChecked] = useState(todoItemData.completed);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleDelete = () => {
    onDelete(todoItemData.id);
  };
  return (
    <div className="TodoItem">
      <p>
        <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {todoItemData.title}
        </div>
        <button onClick={handleDelete}>Remove</button>{" "}
      </p>
    </div>
  );
};

export default TodoItem;
