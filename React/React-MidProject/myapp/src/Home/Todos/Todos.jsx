import TodoComp from "./Todo"

function TodosComp({ id, todos, setCompletedTodo, ShowNewUser }) {

  return (
    <div style={{ margin: '5px' }}>
      Todos - User {id}
      <input type="button" style={{ float: 'right', "backgroundColor": '#eeb570' }} value={'Add'} onClick={() => ShowNewUser()} /> <br />
      <div style={{ border: '5px solid black', width: '300px', margin: '5px', overflowY: "scroll", maxHeight: "250px" }}>
        {
          todos &&
          todos.map((todo, index) => {
            if (todo.userId == id)
              return <TodoComp todo={todo} key={index} setCompletedTodo={setCompletedTodo} />
          })

        }
      </div>
    </div>
  )
}
export default TodosComp
