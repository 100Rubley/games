const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    dialogs: [{ id: 1, name: 'Vova' },
    { id: 2, name: 'Goga' },
    { id: 3, name: 'Lola' },
    { id: 4, name: 'Sosa' },
    { id: 5, name: 'UwU' },],
    messages: [{ id: 1, message: 'Hi' },
    { id: 2, message: "How're you doing?" },
    { id: 3, message: "What's next?" },],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:

      let body = state.newMessageBody

      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id:5, message: body}]
      }

    case UPDATE_NEW_MESSAGE_BODY:

      return {
        ...state,
        newMessageBody: action.body
      }

    default:
      return state
  }
}

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer
