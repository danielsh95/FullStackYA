import ParentComp from "./ParentComp"


function ChildComp({ movie }) {

  return (
    <div style={{ textAlign: 'center', border: '5px solid blue', width: 400 }}>
      Name: {movie.name} <br />
      <img src={movie.pic}></img>
    </div>
  )
}

export default ChildComp
