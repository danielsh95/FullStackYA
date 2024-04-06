import { useState } from "react"
import PersonComp from "./PersonComp"

function PersonsComp() {

  const [persons, setPersons] = useState([
    { name: 'Avi', tasks: [{ title: 'Task A', completed: true }, { title: 'Task B', completed: false }] },
    { name: 'Dana', tasks: [{ title: 'Task C', completed: false }, { title: 'Task D', completed: true }] }])
  return (
    <div style={{ border: '5px solid green', width: '300px' }}>
      <h1>Persons List: </h1>
      {
        persons.map((per, index) => {
          return <PersonComp key={index} person={per} />
        })
      }
    </div >
  )
}

export default PersonsComp
