import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer.js'
import MyPosts from './MyPosts.jsx'

const MyPostContainer = (props) => {
  let state = props.store.getState()

  let addPost = () => {
    props.store.dispatch(addPostCreator())
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextCreator(text))
  }

  let newPostText = state.profilePage.newPostText
  let posts = state.profilePage.posts
  
  return (
    <MyPosts
      addPost={addPost}
      onPostChange={onPostChange} 
      newPostText={newPostText}
      posts={posts}/>
  )
}

export default MyPostContainer
