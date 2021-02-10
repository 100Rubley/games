import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post text={p.text} />)

  return (
    <div className={s.wrapper}>
      <div>My posts</div>

      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts
