import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


function UserComp() {
  const [user, setUser] = useState({})

  const { id } = useParams();
  const { name } = useParams();
  const { email } = useParams();
  const { city } = useParams();

  useEffect(() => {

    setUser({ ...user, id: id, email: email, city: city, name: name })


  }, [])

  return (
    <div style={{ border: '5px solid blue' }}>
      Id: {user.id} <br />
      name: {user.name}<br />
      email: {user.email}<br />
      city: {user.city}<br />

    </div>
  )
}

export default UserComp