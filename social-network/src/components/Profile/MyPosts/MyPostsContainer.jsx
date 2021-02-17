import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer.js'
import MyPosts from './MyPosts.jsx'
import { connect } from 'react-redux'

// const MyPostContainer = (props) => {
//   let state = props.store.getState()

//   let addPost = () => {
//     props.store.dispatch(addPostCreator())
//   }

//   let onPostChange = (text) => {
//     props.store.dispatch(updateNewPostTextCreator(text))
//   }

//   let newPostText = state.profilePage.newPostText
//   let posts = state.profilePage.posts

//   return (
//     <MyPosts
//       addPost={addPost}
//       onPostChange={onPostChange} 
//       newPostText={newPostText}
//       posts={posts}/>
//   )
// }

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
