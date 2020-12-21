import React from 'react';

const Task = ({
  id,
  index,
  taskName,
  done,
  description,
  onDeleteHandler,
}) => {
  return (
    <div className="tbl-header">
      <div className="tbl-content">
      <h2>Liste des taches</h2>
        <table cellPadding="0" cellSpacing="0" border="0">
           <td><b>{taskName}</b></td> 
          <td> {description}</td>
          <td>{done ? <div className="completed">Completé</div> : <div className="notcompleted">Non Completée</div>}</td>
          <td>
            <button onClick={() => onDeleteHandler(index)}>Delete</button>
          </td>
        </table>
      </div>
    </div>
  );
};


export default Task;
