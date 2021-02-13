import Post from './Post/Post'
import s from './MyPosts.module.css'
import React from 'react'
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer'

const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post text={p.text} />)

  let addPost = () => {
    props.dispatch(addPostCreator())
  }

  let onPostChange = (e) => {
    let text = e.target.value
    props.dispatch(updateNewPostTextCreator(text))
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
