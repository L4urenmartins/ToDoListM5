import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // Pode ser 'all', 'completed', ou 'active'
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'active') {
      return !task.completed;
    } else {
      return true;
    }
  });

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Implemente a função para editar tarefas

  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />
      <input
        type="text"
        placeholder="Buscar tarefas"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredTasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
