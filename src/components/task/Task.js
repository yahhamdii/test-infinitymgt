import React from 'react';
import { Link } from 'react-router-dom'

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
        <table cellPadding="0" cellSpacing="0" border="0">
           <td><b>{taskName}</b></td> 
          <td> {description}</td>
          <td>
            <Link onClick={() => onDeleteHandler(index)}>Supprimer</Link>
          </td>
          <td>{done ? <div className="completed">Completé</div> : <div className="notcompleted">Non Completée</div>}</td>
         
        </table>
      </div>
    </div>
  );
};


export default Task;
