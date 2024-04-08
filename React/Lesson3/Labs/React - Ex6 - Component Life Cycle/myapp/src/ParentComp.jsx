import { useState } from "react"
import ChildComp from "./ChildComp"

function ParentComp() {

  const [userId, setUserId] = useState(0)
  return (
    <>
      UserId: <input type="text" onChange={e => setUserId(e.target.value)} />
      <ChildComp userId={userId} />
    </>
  )
}

export default ParentComp
