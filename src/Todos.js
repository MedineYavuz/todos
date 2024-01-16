import { useState } from "react";

const Todos = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };
  return (
    <div className="todos">
      <h2>Todos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="What is your planning?"
          autoFocus
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Todos;
