import { useState, useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoItem from "./components/TodoItem";
import styles from "./App.module.scss";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const reverseTodoListData = [...todos].reverse();

  return (
    <div className={styles.App}>
      <h1>THINGS TO DO:</h1>
      <AddTodoForm setTodos={setTodos} />
      {reverseTodoListData.map((todo) => (
        <TodoItem todoItemData={todo} key={todo.id} onDelete={deleteTodo} />
      ))}
    </div>
  );
}

export default App;
