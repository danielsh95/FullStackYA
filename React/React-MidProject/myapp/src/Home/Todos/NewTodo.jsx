import { useState } from "react"

function NewTodoComp({ userId, ShowTodos, addNewTodo }) {

  const [newTodoTitle, setNewTodoTitle] = useState()

  return (
    <div>
      New Todo - User {userId}

      <div style={{ border: `3px solid black`, margin: '5px', width: '300px', height: '100px', textAlign: 'center' }}><br />
        Title: <input type="text" onChange={e => setNewTodoTitle(e.target.value)} /> <br /> <br />
        <input style={{ "backgroundColor": '#eeb570', float: 'right', margin: 5 }}
          type="button" value={'Add'} onClick={() => addNewTodo(newTodoTitle)} />
        <input style={{ "backgroundColor": '#eeb570', float: 'right', margin: 5 }}
          type="button" value={'Cancel'} onClick={() => ShowTodos()} />
      </div>
    </div>
  )
}
export default NewTodoComp
