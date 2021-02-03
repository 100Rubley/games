import DialogItem from "./DialogItem/DialogItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"

const Dialogs = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.dialogList}>
        <DialogItem name = 'Vova' id = '1' />
        <DialogItem name = 'Goga' id = '2' />
        <DialogItem name = 'Lola' id = '3' />
        <DialogItem name = 'Sosa' id = '4' />
        <DialogItem name = 'UwU' id = '5' />
      </div>

      <div className={s.messageList}>
        <Message message='Hi' />
        <Message message="How're you doing?" />
        <Message message="What's next?" />
      </div>
    </div>
  )
}

export default Dialogs
