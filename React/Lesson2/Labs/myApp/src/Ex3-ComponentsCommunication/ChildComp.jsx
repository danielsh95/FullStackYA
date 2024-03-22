import { useState } from 'react'

function ChildComp(props) {
    const [name, setName] = useState('Reuven')
    const [age, setAge] = useState(50)
    const [city, setCity] = useState('petah-tikva')
    const [adult, setAdult] = useState('not')
    return (
        <div>
            <input type="text" onChange={e => setName(e.target.value)} />
            <input type="text" onChange={e => setAge(e.target.value)} />
            <input type="text" onChange={e => setCity(e.target.value)} />
            <input type="text" onChange={e => setAdult(e.target.value)} />
            <input type="button" onClick={props.callback.addPerson(name, age, city, adult)} />
        </div>

    )
}

export default ChildComp
