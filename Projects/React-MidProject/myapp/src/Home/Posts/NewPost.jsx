import { useState } from "react"

function NewPostComp({ userId, ShowPosts, addNewPost }) {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  return (
    <div style={{ margin: '5px' }}>
      NewPosts - User {userId}
      <div style={{ border: 'solid 3px black', height: '100px' }}>
        <div style={{ margin: '20px' }}>
          Title: <input type="text" onChange={e => setTitle(e.target.value)} /> <br />
          Body: <input type="text" onChange={e => setBody(e.target.value)} /> <br />
          <input style={{ "backgroundColor": '#eeb570', float: 'right', margin: '5px' }}
            type="button" value={'Add'} onClick={() => addNewPost(title, body)} />
          <input style={{ "backgroundColor": '#eeb570', float: 'right', margin: '5px' }}
            type="button" value={'Cancel'} onClick={() => ShowPosts()} />
        </div>
      </div>
    </div>
  )
}
export default NewPostComp
