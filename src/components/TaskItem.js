import React from 'react';

function TaskItem({ task }) {
  return (
    <li>
      <input type="checkbox" checked={task.completed} />
      {task.text}
      <button>Editar</button>
    </li>
  );
}

export default TaskItem;
