import { useSelector } from "react-redux"

function UsersViewComp() {
  const users = useSelector((state) => state.users)

  return (
    <div style={{ border: 'solid 5px green', width: '300px' }}>
      <table border={'black'}>
        <thead>
          <tr>
            <td>Id:</td>
            <td>FirstName:</td>
            <td>LastName:</td>
            <td>Age:</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => {

              return <tr key={index}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
              </tr>

            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default UsersViewComp