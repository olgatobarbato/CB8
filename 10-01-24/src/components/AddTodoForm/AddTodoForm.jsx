import { useState } from "react";
import "./index.scss";

const AddTodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  let todoIdCounter = 201;

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoObject = {
      id: todoIdCounter++,
      completed: false,
    };
    addTodo(todoObject);
    setNewTodo("");
  };
  return (
    <form className="AddTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What are you up to?"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
