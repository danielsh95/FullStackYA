import { useState } from "react"

function DynamicRenderingComp() {

  const [persons, setPersons] = useState([{ name: "Dana", age: 20, city: "Haifa" },
  { name: "Ron", age: 22, city: "Tel Aviv" }, { name: "Dov", age: 31, city: "Ashdod" },
  { name: "Vered", age: 19, city: "Eilat" }]);

  const [name, setName] = useState('Reuven')
  const [age, setAge] = useState(50)
  const [city, setCity] = useState('petah-tikva')

  return (
    <div>

      {
        //table
      }
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
        <tbody>
          {
            persons.map((person, index) => {
              return <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.city}</td>
              </tr>
            })
          }
        </tbody>
      </table>
     
      <ul>
  {
    persons.map((person, index) => {
      return <li key={index}>
        {person.name}
        <ul>
          <li>{person.age}</li>
          <li>{person.city}</li>
        </ul>
      </li>
    })
  }
</ul><br/>

      Name: <input type="text" onChange={e => setName(e.target.value)} /> <br />
      Age: <input type="text" onChange={e => setAge(e.target.value)} /><br />
      City: <input type="text" onChange={e => setCity(e.target.value)} /><br />
      Add: <input type="button" value={'Add'} onClick={e => setPersons(persons => [...persons, { name, age, city }])} /><br />

    </div>
  );
}

export default DynamicRenderingComp;
