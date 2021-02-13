import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

let store = {
  _state: {
    dialogsPage: {
      dialogs: [{ id: 1, name: 'Vova' },
      { id: 2, name: 'Goga' },
      { id: 3, name: 'Lola' },
      { id: 4, name: 'Sosa' },
      { id: 5, name: 'UwU' },],
      messages: [{ id: 1, message: 'Hi' },
      { id: 2, message: "How're you doing?" },
      { id: 3, message: "What's next?" },],
      newMessageBody: ''
    },
    profilePage: {
      posts: [{ id: 1, text: 'Hello, watcha doin?' },
      { id: 2, text: 'How are you?' },
      { id: 3, text: 'Sehr god, bitte' }
      ],
      newPostText: ''
    }
  },
  _callSubscriber() {
    console.log('State have changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {

   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
   this._state.profilePage = profileReducer(this._state.profilePage, action)
    
    this._callSubscriber(this._state)
  },
}

export default store
