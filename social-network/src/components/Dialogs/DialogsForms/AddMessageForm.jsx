import { Field, reduxForm } from "redux-form"
import s from '../Dialogs.module.css'

const AddMessageForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div className={s.formWrapper}>
      <div className={s.fieldWrapper}>
        <Field placeholder={'Enter your message'} name={'messageText'} component={'textarea'} />
      </div>
      <button>Send</button>
    </div>
  </form>
}
export default reduxForm({ form: "dialog" })(AddMessageForm)
