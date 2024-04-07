import { useState } from "react";
import { getUserFullData } from "./Utils";
function AccessServerComp() {

  const [userData, setUserData] = useState({})
  const [userId, setUserId] = useState(0)

  const setData = async () => {
    const u_d = await getUserFullData(userId)
    setUserData(u_d)
  }

  return (

    <div>
      enter UserId: <input type="text" onChange={e => setUserId(e.target.value)} />
      <input type="button" value={'get data user'} onClick={setData} /> <br /><br />
      Name:{userData.name} <br />
      Email:{userData.email}<br />
      Todos:
      <ul>
      {
        userData.todosTitles.map((title, index) => {
          return <li key={index}>
            {title}
          </li>
        })
      }
      </ul> <br/>

      posts:
      <ul>
      {
        userData.postsTitle.map((title, index) => {
          return <li key={index}>
            {title}
          </li>
        })
      }
      </ul>
    </div>
  )
}

export default AccessServerComp
