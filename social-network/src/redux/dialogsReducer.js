const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [{ id: 1, name: 'Vova' },
    { id: 2, name: 'Goga' },
    { id: 3, name: 'Lola' },
    { id: 4, name: 'Sosa' },
    { id: 5, name: 'UwU' },],
    messages: [{ id: 1, message: 'Hi' },
    { id: 2, message: "How're you doing?" },
    { id: 3, message: "What's next?" },]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:

      let body = action.messageText

      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id:5, message: body}]
      }

    default:
      return state
  }
}

export const sendMessageCreator = (messageText) => ({ type: SEND_MESSAGE,  messageText})

export default dialogsReducer
