import { addPostCreator } from '../../../redux/profileReducer.js'
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
    addNewPost: (postText) => {
      dispatch(addPostCreator(postText))
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer
