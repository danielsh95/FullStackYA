import TaskComp from "./TaskComp"

function PersonComp(props) {

  return (
    <div style={{ border: '5px solid red', width: '200px' }}>

      <h3>{props.person.name}<br /><br />
      Tasks: <br />
      </h3>
      {
        props.person.tasks.map((task, index) => {
          return <TaskComp key={index} task={task}/>
        })
      }
    </div>
  )
}

export default PersonComp
