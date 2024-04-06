function TaskComp(props) {

  return (
    <div style={{ border: '5px solid blue', width: '150px' }}>
      Title: {props.task.title} <br />
      Completed: {props.task.completed.toString()}<br />
    </div>
  )
}

export default TaskComp
