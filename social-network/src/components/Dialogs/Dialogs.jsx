import DialogItem from "./DialogItem/DialogItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state"

const Dialogs = (props) => {

  let dialogElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElement = props.state.messages.map(m => <Message message={m.message} />)

  let newDialogElement = React.createRef()

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }
  let onMessageChange = () => {
    let text = newDialogElement.current.value
    props.dispatch(updateNewMessageTextActionCreator(text))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.dialogList}>
        {dialogElement}
      </div>

      <div className={s.messageList}>
        {messagesElement}
      </div>

      <div className={s.textAreaWrapper}>
        <textarea
          onChange={onMessageChange}
          ref={newDialogElement}
          value={props.state.newMessageText}></textarea>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs
