import { profileAPI } from "../api/api"

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [{ id: 1, text: 'Hello, watcha doin?' },
  { id: 2, text: 'How are you?' },
  { id: 3, text: 'Sehr god, bitte' }
  ],
  newPostText: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {

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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state
  }
}

export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const addPostCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then(response => { 
        dispatch(setUserProfile(response.data))
      })

}

export default profileReducer
