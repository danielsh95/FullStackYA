import { useState } from 'react'
import ChildComp from './Ex3-ComponentsCommunication/ChildComp'

function App() {

  const [persons, setPersons] = useState([{ name: "dan", age: 25, city: 'telAviv', adult: '' }])

  const addPerson = (name, age, city, adult) => {
    setPersons(per => [...per, { name, age, city, adult }])
  }


  return (
    <div>

      <ul>
        {
          persons.map((per, index) => {
            const personOutPut = `${per.name} is ${per.age} years old, lives in ${per.city} and He is ${per.adult} an Adult`;
            return <li key={index}>{personOutPut}</li>
          })
        }

      </ul>

      <ChildComp callback={addPerson} />
    </div>

  )
}

export default App
