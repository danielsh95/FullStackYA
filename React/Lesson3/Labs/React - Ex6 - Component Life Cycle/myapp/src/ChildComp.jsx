import { useEffect, useState } from "react"
import axios from 'axios';

function ChildComp({ userId }) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      console.log(userId);
      const url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}&_limit=5`
      const { data } = await axios.get(url)
      setTasks(data.map(todo => todo.title))
    }
    fetchData()
  }, [userId])
  return (
    <>
      <ul>
        {
          tasks.map((task, index) => {
            return <li key={index}>{task}</li>
          })
        }
      </ul>
    </>
  )
}

export default ChildComp
