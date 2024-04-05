import { useState } from "react"


function ChildComp(props) {
  const [person, setPerson] = useState({ name: '', age: '', city: '', isAdult: undefined })
  return (
    <div style={{ backgroundColor: 'silver' }}>
      <h1>Child Component</h1>
      Name: <input type="text" onChange={e => setPerson({ ...person, name: e.target.value })} /> <br />
      Age: <input type="text" onChange={e => setPerson({ ...person, age: e.target.value })} /><br />
      City: <input type="text" onChange={e => setPerson({ ...person, city: e.target.value })} /><br />
      is Adult: <input type="checkbox" onChange={e => setPerson({ ...person, isAdult: e.target.checked })}/>
      <input type="button" value={'Add'} onClick={() => props.callback(person)} />
    </div>
  )
}

export default ChildComp
