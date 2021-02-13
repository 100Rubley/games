const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageBody
      }

      state.messages.push(newMessage)
      state.newMessageBody = ''
      return state

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state

    default:
      return state
  }
}

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer
