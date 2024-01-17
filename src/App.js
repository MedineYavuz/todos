import "./App.css";
import Todos from "./Todos";
import List from "./List";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";

uuid4();

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuid4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  return (
    <div
      className="App"
      style={{ color: "#142473", backgroundColor: "#fff", paddingTop: 20 }}
    >
      <Todos addTodo={addTodo}></Todos>{" "}
      {todos.map((todo, i) => (
        <List task={todo} key={i}></List>
      ))}
    </div>
  );
}

export default App;
