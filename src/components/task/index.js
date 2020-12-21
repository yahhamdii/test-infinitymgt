import React, { useState } from "react";
import TaskList from './TaskList';
import AddTask from './AddTask';

export const Task = () => {
 
  const [todos, setTodos] = useState([    {
    id: 1,
    taskName: 'Envoyer un e-mail',
    description: 'A toute l\'equipe',
    done: true
  }])

  const onDeleteHandler = (index) => {
    const todos = todos.slice(0);
    todos.splice(index, 1);
    this.setState({ todos });
  };

  const onAddTaskHandler = (newTodo) => {
    const todos = todos.slice(0);
    todos.push(newTodo);
    setTodos({ todos });
  };

    return (
      <div>
        <TaskList
          todos={todos}
          onDeleteHandler={onDeleteHandler}
        />
        <AddTask onAddTodoHandler={onAddTaskHandler} />
      </div>
    );
}

