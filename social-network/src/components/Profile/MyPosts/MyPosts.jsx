import Post from './Post/Post'
import s from './MyPosts.module.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div className={s.wrapper}>
      <div className={s.fieldWrapper}>
        <Field placeholder={'Write something'} name={'post'} component={'textarea'}/>
      </div>

      <div className={s.button}>
        <button>Add post</button>
      </div>
    </div>
  </form>
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm)

const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post key={p.id} text={p.text} />)

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div className={s.wrapper}>
      <div>My posts</div>

      <PostReduxForm onSubmit={onSubmit}/>

      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts
