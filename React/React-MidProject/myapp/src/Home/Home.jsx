import { useEffect } from "react"
import { useState } from "react"
import { getData } from "../Tools/Utils"
import UserComp from "./User"

const URL_USER = 'https://jsonplaceholder.typicode.com/users'
const URL_TODOS = 'https://jsonplaceholder.typicode.com/todos'

function HomeComp() {

  const [users, setUsers] = useState([])
  const [usersFilter, setUsersFilter] = useState([])
  // const [todos, setTodos] = useState([])
  // const [isShowTodosPost, setIsShowTodosPost] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const allUsers = await getData(URL_USER)
      setUsers(allUsers)
      setUsersFilter(allUsers)

      // const allTodos = await getData(URL_TODOS)
      // setTodos(allTodos)
    }
    fetchData()
  }, [])

  const searchFilter = (text) => {
    const result = users.filter(user => user.name.includes(text) || user.email.includes(text))
    setUsersFilter(result)
  }
  const updateUser = (user) => {
    setUsers(prevUsers =>
      prevUsers.map(prevUser =>
        prevUser.id === user.id ? user : prevUser
      )
    );

    setUsersFilter(prevUsers =>
      prevUsers.map(prevUser =>
        prevUser.id === user.id ? user : prevUser
      )
    );
    console.log(usersFilter);
  }

  const deleteUser = (userId) => {
    setUsers(prevUsers =>
      prevUsers.filter(user => user.id !== userId)
    );

    setUsersFilter(prevUsers =>
      prevUsers.filter(user => user.id !== userId)
    );
  }

  return (
    <div style={{ border: '5px solid black', width: '300px', borderRadius: '25px' }}>

      <div style={{ margin: '5px' }}>

        <div style={{ textAlign: 'center' }}>
          Search: <input type="text" onChange={e => searchFilter(e.target.value)} /> &nbsp;&nbsp;&nbsp;
          <input style={{ "backgroundColor": '#eeb570' }} type="button" value={'Add'} />
        </div>

        {
          usersFilter.map((user, index) => {
            return <div key={index}>
              <UserComp borderColor='red' user={user} callback={{ updateUser, deleteUser }} /> <br />
            </div>
          })


        }
      </div>
    </div>
  )
} 
export default HomeComp
