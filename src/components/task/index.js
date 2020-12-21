import React, { useState } from "react";
import TaskList from './TaskList';
import AddTask from './AddTask';

export const Task = () => {
 
  const [tasks, setTasks] = useState([    {
    id: 1,
    taskName: 'Envoyer un e-mail',
    description: 'A toute l\'equipe',
    done: true
  }])

  const onDeleteHandler = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const onAddTaskHandler = (newTask) => {
    tasks.push(newTask);
    setTasks([...tasks]);
  };

    return (
      <div>
        <TaskList
          tasks={tasks}
          onDeleteHandler={onDeleteHandler}
        />
        <AddTask onAddTaskHandler={onAddTaskHandler} />
      </div>
    );
}

