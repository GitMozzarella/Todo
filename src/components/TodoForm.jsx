import React from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="Название задачи..."
      />
      <button type="submit" className="todo-btn">
        Добавить задачу
      </button>
    </form>
  );
};

export default TodoForm;
