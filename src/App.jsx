import { useState } from "react";
import "./App.css";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    // todos
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Id");

  let counter = 1

  const addTodo = (counter, text, category) => {
    const newTodos = [
      ...todos,
      {
        id: counter,
        text,
        category,
        isCompleted: false
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completedTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : sort === "Desc"
              ? b.text.localeCompare(a.text)
              : toString(a.id).localeCompare(toString(b.id))
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completedTodo={completedTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
