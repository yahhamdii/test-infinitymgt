import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteHandler }) => (
  <div>
    {tasks.length === 0 && <div>Il n'y a pas de tache.</div>}
    {
      tasks.length > 0
        && (
          <div>
            <h2>Liste des taches</h2>
            {
              tasks.map((task, index) => (
                <Task
                  index={index}
                  {...task}
                  onDeleteHandler={onDeleteHandler}
                />
              ))
            }
          </div>
        )
    }
  </div>
);

export default TaskList;
