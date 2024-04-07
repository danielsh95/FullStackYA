import axios from "axios"
import { useState } from "react"
import ChildCopm from "./ChildCopm"

function ParentComp() {

  const [users, setUsers] = useState([])

  const getData = async () => {
    const url_users = 'https://jsonplaceholder.typicode.com/users/'
    const { data: allUsers } = await axios.get(url_users)
    setUsers(allUsers)
  }
  return (
    <div style={{ border: '2px solid black', width: '1000px' }}>
      <b>Users</b>
      <input value={'Get data'} type="button" onClick={getData} /> <br />

      {
        users.map((user, index) => {
          return <ChildCopm key={index} user={user} />
        })
      }
    </div>
  )
}

export default ParentComp
