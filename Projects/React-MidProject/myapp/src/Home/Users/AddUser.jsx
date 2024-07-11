import { useState } from "react"


function AddUserComp({ addNewUser, ShowOffNewUser }) {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div style={{ border: `5px solid black` }} >
      <div style={{ margin: '5px' }}>
        Name: <input type="text" onChange={e => setName(e.target.value)} /> <br /><br />
        Email: <input type="text" onChange={e => setEmail(e.target.value)} /><br /><br />
        <input style={{ "backgroundColor": '#eeb570', float: 'right', margin: '5px' }}
          type="button" value={'Add'} onClick={() => addNewUser(name, email)} />
        <input style={{ "backgroundColor": '#eeb570', float: 'right', margin: '5px' }}
          type="button" value={'Cancel'} onClick={() => ShowOffNewUser()} /><br /><br />
      </div>
    </div>
  )
}

export default AddUserComp
