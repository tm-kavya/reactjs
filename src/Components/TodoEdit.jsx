import React, { useState } from "react";

const TodoEdit = ({ id, todo, isDone, onSubmit }) => {
  const [todoEdit, setTodoEdit] = useState(todo);
  const handleChange = (e) => {
    setTodoEdit(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(id, isDone, todoEdit);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-edit">
        <label htmlFor="todo">Todo</label>
        <input type="text" id="todo" value={todoEdit} onChange={handleChange} />
        <button className="save">Save</button>
      </form>
    </div>
  );
};

export default TodoEdit;
