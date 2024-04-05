import { useState } from "react"
import ChildComp from "./ChildComp"


function ParentComp() {
  const [persons, setPersons] = useState([{ name: 'Avi', age: '23', city: 'TLV', isAdult: true }])

  const addPerson = (person) => {
    setPersons([...persons, person])
  }

  return (
    <div style={{backgroundColor: 'yellow'}}>
      <h1>Parent Component</h1>
      <ul>
        {
          persons.map((person, index) => {
            const details = `${person.name} is ${person.age} years old, lives in ${person.city} and 
            He is ${person.isAdult ? 'an Adult' : 'not an Adult'}`
            return <li key={index}>{details}</li>
          })
        }
      </ul>

      <ChildComp callback={addPerson}/>
    </div>
  )
}

export default ParentComp
