import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const UsersComp = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchEffect = async () => {
      const url_users = 'https://jsonplaceholder.typicode.com/users'
      const { data } = await axios.get(url_users);
      setUsers(data)
    }
    fetchEffect();
  }, [])
  return (
    <div>
      {
        users.map((user, index) => {
          return <div key={index}>
            <Link to={`/users/${user.id}/${user.name}/${user.email}/${user.address.city}`} >{user.name}</Link>
          </div>
        })
      }
    </div>
  )
}

export default UsersComp