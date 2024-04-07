import { useState } from "react"
import TasksComp from "./TasksComp"
import axios from 'axios'

function ChildCopm({ user }) {

  const [isShow, setIsShow] = useState(false)
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    const url_todos = 'https://jsonplaceholder.typicode.com/todos'
    const { data: todos } = await axios.get(url_todos + `?userId=${user.id}&_limit=3`)
    setTasks(todos.map(todo => todo.title))
    setIsShow(!isShow)
  }

  return (
    <div style={{ border: '2px solid black', width: '900px' }}>
      UserId: {user.id} <br />
      Name: {user.name} <br />
      Email: {user.email} <br/>
      <input value={'Tasks'} type="button" onClick={getTasks} />

      {isShow ? <TasksComp tasks={tasks}/> : null}
    </div>
  )
}

export default ChildCopm
