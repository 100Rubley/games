import { Field, reduxForm } from 'redux-form'
import s from '../Post.module.css'

const AddPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div className={s.wrapper}>
      <div className={s.fieldWrapper}>
        <Field placeholder={'Write something'} name={'postText'} component={'textarea'}/>
      </div>

      <div className={s.button}>
        <button>Add post</button>
      </div>
    </div>
  </form>
}
export default reduxForm({ form: 'profile-add-post' })(AddPostForm)
