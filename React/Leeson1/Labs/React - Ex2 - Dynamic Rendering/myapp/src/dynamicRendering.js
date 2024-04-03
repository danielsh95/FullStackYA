import './App.css';
import { useState } from "react";

function DynamicComp() {

  const [person, setperson] = useState([{ Name: 'Dana', Age: '20', City: 'Haifa' },
  { Name: 'Ron', Age: '22', City: 'Tel Aviv' },
  { Name: 'Dov', Age: '31', City: 'Ashdod' },
  { Name: 'Vered', Age: '19', City: 'Eilat' }])

  const [personName, setPersonName] = useState('')
  const [personAge, setPersonAge] = useState('')
  const [personCity, setPersonCity] = useState('')

  // Dynamic html:
  return (
    <div className="App">
      <table border={2}>
        <thead>
          <tr><th>Name</th><th>Age</th><th>City</th></tr>
        </thead>
        <tbody>
          {
            person.map((p, index) => {
              return <tr key={index}>
                <td>{p.Name}</td>
                <td>{p.Age}</td>
                <td>{p.City}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      <br />

      <ul>
        {
          person.map((p, index) => {
            return < ul key={index}>
              <li>{p.Name}</li>
              <ul>
                <li>{p.Age}</li>
                <li>{p.City}</li>
              </ul>
            </ul>

          })
        }
      </ul>

      <br />
      <br />

{/* Repeater: */}
      
      Add new person: <br /> Name: <input type='text' onChange={e => setPersonName(e.target.value)} />
      age: <input type='text' onChange={e => setPersonAge(e.target.value)} />
      city: <input type='text' onChange={e => setPersonCity(e.target.value)} /> <br /> <br />
      <input style={{ width: 100, fontSize: '20px' }} value={'Add'} type='button'
        onClick={() => setperson([...person, { Name: personName, Age: personAge, City: personCity }])} />

    </div >
  );
}

export default DynamicComp;
