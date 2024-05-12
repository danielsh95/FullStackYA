import { useEffect } from "react"
import PostComp from "./Post"

function PostsComp({ id, posts, ShowNewPost }) {

  return (
    <div style={{ width: '300px', margin: '5px' }}>
      Posts - User {id}
      <input type="button" style={{ float: 'right', "backgroundColor": '#eeb570' }} value={'Add'} onClick={() => ShowNewPost(true)} />
      <div style={{ border: 'solid 5px black', margin: '5px', overflowY: "scroll", maxHeight: "300px" }}>
        {
          posts.map((post, index) => {
            if (post.userId == id)
              return <PostComp key={index} post={post} />
          })

        }
      </div>
    </div>
  )
}
export default PostsComp
