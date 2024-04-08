import { useState } from 'react';
import { getData, updateUser } from './Utils';

function App() {

  const [UserId, setUserId] = useState(0)
  const [User, setUser] = useState({})
  const [response, setresponse] = useState('')

  const getUserData = async () => {
    setUser(await getData(UserId))
  }
  const updateUserData = async () => {
    const data = await updateUser(UserId, { ...User })
    setresponse('updated!')
  }

  return (
    <>
      User ID: <input type="text" onChange={e => setUserId(e.target.value)} />
      <input type="button" value={'Get Data'} onClick={getUserData} /> <br /><br />

      Name: <input value={User.name} type="text" onChange={e => setUser({ ...User, name: e.target.value })} /> <br />
      Email: <input value={User.email} type="text" onChange={e => setUser({ ...User, email: e.target.value })} />
      <input type='submit' onClick={updateUserData} /> <br/>
      result: {response}
    </>
  )
}

export default App
