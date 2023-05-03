import TodoAdd from "./Components/TodoAdd";
import TodoList from "./Components/TodoList";
import { useState, useEffect } from "react";
import axios from "axios";
// const items = [
//   {
//     id: 1,
//     isDone: false,
//     todo: "Go to shop",
//   },
//   {
//     id: 2,
//     isDone: false,
//     todo: "Wash clothes",
//   },
//   {
//     id: 3,
//     isDone: false,
//     todo: "Jogging",
//   },
//   {
//     id: 4,
//     isDone: false,
//     todo: "Book appoinment to the advocate",
//   },
//   {
//     id: 5,
//     isDone: true,
//     todo: "Fill water tank",
//   },
// ];
const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:3001/todos");
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const checkedTodoById = async (id, isDone, todo) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      isDone,
      todo,
    });

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...response.data };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  const editTodoById = async (id, isDone, newTodo) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      isDone,
      todo: newTodo,
    });

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...response.data };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const createTodo = async (todo) => {
    const response = await axios.post("http://localhost:3001/todos", {
      isDone: false,
      todo,
    });
    // console.log(response.data);
    // setTodos([{ id: Math.random() * 10, isDone: false, todo }, ...todos]);
    setTodos([response.data, ...todos]);
  };

  const completed = todos.filter((todo) => {
    return todo.isDone === false;
  });

  const pending = todos.filter((todo) => {
    return todo.isDone === true;
  });

  return (
    <div className="entire">
      <div className="full-container">
        <TodoAdd
          onCreate={createTodo}
          all={todos.length}
          completed={completed.length}
          pending={pending.length}
        />
        <div className="bottom-container">
          <TodoList
            todos={todos}
            onDelete={deleteTodoById}
            onEdit={editTodoById}
            onChecked={checkedTodoById}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
