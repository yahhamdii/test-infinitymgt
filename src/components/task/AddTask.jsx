import React, { useState } from "react";

const AddTask = (props) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddTodoHandler({ taskName, description });
  };

  return (
    <div className="task">
      <h2>Créer une nouvelle tache</h2>
      <form onSubmit={onSubmitHandler}>
        <label>Nom de la tache</label>
        <input
          name="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <label>Description de la tache en une ligne</label>
        <input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input className="btn" type="submit" value="Ajouter la tache" />
      </form>
    </div>
  );
};

export default AddTask;
