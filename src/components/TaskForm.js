import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAddTask({ text, completed: false });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicionar tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;
