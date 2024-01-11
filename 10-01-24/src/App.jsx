import { useState, useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoItem from "./components/TodoItem";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <h1>THINGS TO DO:</h1>
      <AddTodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem todoItemData={todo} key={todo.id} onDelete={deleteTodo} />
      ))}
    </div>
  );
}

export default App;
