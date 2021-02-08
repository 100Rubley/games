import DialogItem from "./DialogItem/DialogItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"

const Dialogs = (props) => {

  let dialogElement = props.state.dialogs.map( d => <DialogItem name = {d.name} id = {d.id} />)
  let messagesElement = props.state.messages.map( m => <Message message={m.message} />)

  return (
    <div className={s.wrapper}>
      <div className={s.dialogList}>
        {dialogElement}
      </div>

      <div className={s.messageList}>
        {messagesElement}
      </div>

      <div className={s.textAreaWrapper}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
    </div>
  )
}

export default Dialogs
