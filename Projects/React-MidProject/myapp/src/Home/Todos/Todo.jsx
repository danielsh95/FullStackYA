import { useEffect } from "react"


function TodoComp({ todo, setCompletedTodo }) {


  return (
    <div>
      {todo &&
        <div style={{ border: '2px solid black', margin: '5px' }}>
          Title:{todo.title} <br />
          Completed:{todo.completed.toString()} <br />

          {!todo.completed &&
            <input style={{ "backgroundColor": '#eeb570', float: 'right' }}
              type="button" value={'Mark Completed'} onClick={() => setCompletedTodo(todo.id)} />
          }
          <br />
        </div>
      }
    </div>
  )
}
export default TodoComp
