import { useState } from "react";

const TodoAdd = (props) => {
  const { onCreate, all, completed, pending } = props;
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(todo);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="top-container">
      <form onSubmit={handleSubmit}>
        <h1>Todo App</h1>
        <div className="input-form">
          <input
            className="input-add"
            placeholder="Add new todo"
            type="text"
            name="todo-add"
            onChange={handleChange}
            value={todo}
          />
          <button className="add-todo">Add</button>
        </div>
      </form>
      <div className="count">
        <div className="all-tasks">All Tasks: {all}</div>
        <div className="completed-tasks">Completed: {pending}</div>
        <div className="incomplete-tasks">Incomplete: {completed}</div>
      </div>
    </div>
  );
};

export default TodoAdd;
