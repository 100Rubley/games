import DialogItem from "./DialogItem/DialogItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer"

const Dialogs = (props) => {

  let dialogElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElement = props.state.messages.map(m => <Message message={m.message} />)

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (e) => {
    let text = e.target.value
    props.dispatch(updateNewMessageBodyCreator(text))
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
          placeholder='Enter your message'
          onChange={onNewMessageChange}
          value={props.state.newMessageBody}></textarea>
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs
