import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer.js'
import MyPosts from './MyPosts.jsx'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator())
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextCreator(text))
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer
