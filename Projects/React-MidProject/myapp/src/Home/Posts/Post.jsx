
function PostComp({ post }) {

  return (
    <div style={{ margin: '15px', border: 'solid 2px black' }}>
      Title: {post.title} <br/><br/>
      Body: {post.body}
    </div>
  )
}
export default PostComp
