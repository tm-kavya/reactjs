import edit from "../assets/edit.png";
import close from "../assets/close.png";
import { useState } from "react";
import TodoEdit from "./TodoEdit";

const TodoItem = ({ id, todo, isDone, onDelete, onEdit, onChecked }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleChecked = () => {
    onChecked(id, !isDone, todo);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleDelete = () => {
    onDelete(id);
  };
  const handleSubmit = (id, isDone, newTodo) => {
    setShowEdit(false);
    onEdit(id, isDone, newTodo);
  };
  let content = (
    <div className="content">
      <input type="checkbox" onChange={handleChecked} checked={isDone} className="check-box"/>
      <p style={{ textDecoration: isDone ? "line-through" : "none" }}>{todo}</p>
    </div>
  );

  if (showEdit) {
    content = (
      <TodoEdit id={id} todo={todo} isDone={isDone} onSubmit={handleSubmit} />
    );
  }
  return (
    <div className="todo-item">
      {content}
      <div className="images">
        <img src={edit} alt="edit" className="edit" onClick={handleEdit} />
        <img src={close} alt="close" className="close" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default TodoItem;
