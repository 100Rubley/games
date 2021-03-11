import Post from './Post/Post'
import s from './MyPosts.module.css'
import React from 'react'
import AddPostForm from './Post/addNewPostForm/AddPostForm'


const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post key={p.id} text={p.text} />)

  const addNewPost = (values) => {
    props.addNewPost(values.postText)
  }

  return (
    <div className={s.wrapper}>
      <div>My posts</div>

      <AddPostForm onSubmit={addNewPost}/>

      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts
