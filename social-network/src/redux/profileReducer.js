const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    posts: [{ id: 1, text: 'Hello, watcha doin?' },
    { id: 2, text: 'How are you?' },
    { id: 3, text: 'Sehr god, bitte' }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        text: state.newPostText
      }

      state.posts.push(newPost)
      state.newPostText = ''
      return state

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state

    default:
      return state
  }
}

export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const addPostCreator = () => ({ type: ADD_POST })

export default profileReducer
