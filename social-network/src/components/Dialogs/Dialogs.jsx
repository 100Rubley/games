import DialogItem from "./DialogItem/DialogItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import React from 'react'
import AddMessageForm from "./DialogsForms/AddMessageForm"

const Dialogs = (props) => {

  let dialogElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
  let messagesElement = props.messages.map(m => <Message key={m.id} message={m.message} />)

  const addNewMessage = (values) => {
    props.sendMessage(values.messageText)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.dialogList}>
        {dialogElement}
      </div>

      <div className={s.messageList}>
        {messagesElement}
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  )
}

export default Dialogs
