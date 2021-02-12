const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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
      newMessageText: ''
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
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 5,
          text: this._state.profilePage.newPostText
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
        break

      case ADD_MESSAGE:
        let newMessage = {
          id: 5,
          message: this._state.dialogsPage.newMessageText
        }

        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
        break

      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber(this._state)
        break

      case UPDATE_NEW_MESSAGE_TEXT:
        this._state.dialogsPage.newMessageText = action.newText
        this._callSubscriber(this._state)
        break

      default:
        return
    }
  },
}

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })
export const addPostActionCreator = () => ({ type: ADD_POST })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export default store
