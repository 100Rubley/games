import DialogItem from "./DialogItem/DialogItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"

const Dialogs = () => {

  let dialogs = [
    {id: 1, name: 'Vova'},
    {id: 2, name: 'Goga'},
    {id: 3, name: 'Lola'},
    {id: 4, name: 'Sosa'},
    {id: 5, name: 'UwU'},
  ]

  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: "How're you doing?"},
    {id: 3, message: "What's next?"},
  ]

  let dialogElement = dialogs.map( d => <DialogItem name = {d.name} id = {d.id} />)
  let messagesElement = messages.map( m => <Message message={m.message} />)

  return (
    <div className={s.wrapper}>
      <div className={s.dialogList}>
        {dialogElement}
      </div>

      <div className={s.messageList}>
        {messagesElement}
      </div>
    </div>
  )
}

export default Dialogs
