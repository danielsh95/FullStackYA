
import { useState } from 'react';
import { getById } from './Utils';
function AccessServerComp() {

  const [user, setUser] = useState({})
  const [todos, setTodos] = useState([])

  const ShowToDos = async (userId) => {
    setTodos([])
    setUser([])
    const urlApi = 'https://jsonplaceholder.typicode.com/'
    const { data: foundUser } = await getById(urlApi + 'users/', userId)
    //setUser({ ...user, ...{ name: data.name, email: data.email } })
    setUser({ id: userId, name: foundUser.name, email: foundUser.email })

    if (foundUser.name.startsWith('E')) {
      const { data: foundTodos } = await getById(urlApi + 'todos?userId=', userId)
      setTodos(foundTodos)
    }
  }

  return (
    <>
      Enter ID: <input type='text' onChange={e => setUser({ ...user, id: e.target.value })} />
      <input type='button' value='findd' onClick={() => ShowToDos(user.id)} /> <br />
      Name: {user.name}
      <ul>
        <h2>Todos:</h2>
        {
          todos.map((todo, index) => {
            return <li key={index}>{todo.title}</li>
          })
        }
      </ul>
    </>
  )
}

export default AccessServerComp
