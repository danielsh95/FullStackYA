import { useState } from "react"
import { useDispatch } from "react-redux"


function AddUserComp() {

  const [user, setUser] = useState({})
  const dispatch = useDispatch()

  const addUser = () => {
    dispatch({ type: 'addUser', payload: user })
  }

  const updateUser = () => {
    dispatch({ type: 'UpdateUser', payload: user })
  }
  const deleteUser = () => {
    dispatch({ type: 'deleteUser', payload: user })
  }

  return (
    <div style={{ border: 'solid 5px red', width: '300px' }}>
      ID: <input type="text" onChange={e => setUser({ ...user, id: e.target.value })} /> <br />
      FirstName: <input type="text" onChange={e => setUser({ ...user, firstName: e.target.value })} /><br />
      LastName: <input type="text" onChange={e => setUser({ ...user, lastName: e.target.value })} /><br />
      Age: <input type="text" onChange={e => setUser({ ...user, age: e.target.value })} /><br />

      <input type="button" value={'Add'} onClick={addUser} />
      <input type="button" value={'Update'} onClick={updateUser} />
      <input type="button" value={'Delete'} onClick={deleteUser}/>
    </div>
  )
}

export default AddUserComp