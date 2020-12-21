import React from 'react'
import Task from './Task'

const TaskList = ({todos, onDeleteHandler}) => {
  return (
    <div>
      {todos.length === 0 && <div>Il n'y a pas de tache.</div>}
      {
        todos.length > 0 &&
        <div>
          {
            todos.map((todo, index) => {
              return <Task index={index}
                {...todo}
                onDeleteHandler={onDeleteHandler} />
            })
          }
        </div>
      }
    </div>
  )
}

export default TaskList