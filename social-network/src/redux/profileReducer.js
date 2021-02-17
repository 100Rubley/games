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

  let stateCopy = {
    ...state,
    posts: [...state.posts]
  }

  switch (action.type) {
    case ADD_POST:
      let postText = state.newPostText

      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, { id: 4, text: postText }]
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }

    default:
      return state
  }
}

export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const addPostCreator = () => ({ type: ADD_POST })

export default profileReducer
