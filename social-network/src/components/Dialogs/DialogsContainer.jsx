import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
  let state = props.store.getState()
  let newMessageBody = state.dialogsPage.newMessageBody
  let dialogs = state.dialogsPage.dialogs
  let messages = state.dialogsPage.messages

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageBodyCreator(text))
  }

  return (
    <Dialogs 
      onSendMessageClick={onSendMessageClick}
      onNewMessageChange={onNewMessageChange}
      newMessageBody={newMessageBody}
      dialogs={dialogs}
      messages={messages}/>
  )
}


export default DialogsContainer
