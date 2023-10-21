import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [counter, setCounter] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(counter, value, category);
    setCounter(counter+1);
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option>Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};
export default TodoForm;
