import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageCreator())
    },
    onNewMessageChange: (text) => {
      dispatch(updateNewMessageBodyCreator(text))
    }
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer
