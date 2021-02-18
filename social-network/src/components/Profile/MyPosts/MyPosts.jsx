import Post from './Post/Post'
import s from './MyPosts.module.css'
import React from 'react'

const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post key={p.id} text={p.text} />)

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = (e) => {
    let text = e.target.value
    props.onPostChange(text)
  }

  return (
    <div className={s.wrapper}>
      <div>My posts</div>

      <div>
        <div>
          <textarea
          onChange={onPostChange} 
          value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts
