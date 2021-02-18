import DialogItem from "./DialogItem/DialogItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import React from 'react'

const Dialogs = (props) => {

  let dialogElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
  let messagesElement = props.messages.map(m => <Message key={m.id} message={m.message} />)

  let onSendMessageClick = () => {
    props.onSendMessageClick()
  }
  let onNewMessageChange = (e) => {
    let text = e.target.value
    props.onNewMessageChange(text)
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
          value={props.newMessageBody}></textarea>
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs
