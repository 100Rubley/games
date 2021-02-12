import Post from './Post/Post'
import s from './MyPosts.module.css'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'

const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post text={p.text} />)

  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div className={s.wrapper}>
      <div>My posts</div>

      <div>
        <div>
          <textarea
          onChange={onPostChange} 
          ref={newPostElement} 
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
