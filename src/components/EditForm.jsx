import React from "react";

const EditForm = ({ editTodo, task }) => {
  const [value, setValue] = React.useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="Редактирование задачи..."
      />
      <button type="submit" className="todo-btn">
        Переименовать
      </button>
    </form>
  );
};

export default EditForm;
