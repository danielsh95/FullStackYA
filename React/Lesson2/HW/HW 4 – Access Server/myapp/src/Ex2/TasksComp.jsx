import { useState } from "react"


function TasksComp({ tasks }) {




  return (
    <div style={{ border: '2px solid black', width: '700px' }}>
      <ul>
        {
          tasks.map((task, index) => {
            return <li key={index}>{task}</li>
          })
        }
      </ul>
    </div>
  )
}

export default TasksComp
