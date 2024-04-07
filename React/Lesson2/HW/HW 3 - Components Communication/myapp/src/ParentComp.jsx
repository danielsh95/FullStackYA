import { useState } from "react"
import ChildComp from "./ChildComp"


function ParentComp() {
  const [movies, ] = useState([
    { id: 1, name: "Under the Dome", pic: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" },
    { id: 2, name: "Person of Interest", pic: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg" },
    { id: 3, name: "Bitten", pic: "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg" }])
  const [movieShow, setMovieShow] = useState({})


  const showMoive = (nameMovie) => {
    setMovieShow(movies.find(movie => movie.name == nameMovie))
  }

  return (
    <div style={{ border: '5px solid red', width: 600 }}>
      <div style={{ textAlign: "center" }}>
        <h2>Pick a Movie</h2>
        <select onChange={e => showMoive(e.target.value)}>
          <option style={{ visibility: 'hidden' }}>chioce:</option>
          {
            movies.map(movie => {
              return <option key={movie.id}>{movie.name}</option>
            })
          }
        </select>
      </div> <br />
      <ChildComp movie={movieShow} /> <br />
    </div>
  )
}

export default ParentComp
