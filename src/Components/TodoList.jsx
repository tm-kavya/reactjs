import TodoItem from "./TodoItem";
const TodoList = ({ todos, onDelete, onEdit, onChecked }) => {
  return todos.map((item) => {
    return (
      <TodoItem
        key={item.id}
        id={item.id}
        isDone={item.isDone}
        todo={item.todo}
        onDelete={onDelete}
        onEdit={onEdit}
        onChecked={onChecked}
      />
    );
  });
};
export default TodoList;
