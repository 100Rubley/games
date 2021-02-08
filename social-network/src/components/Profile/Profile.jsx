import MyPost from './MyPosts/MyPost'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

  let newPost = props.state.posts.map(p => <MyPost id={p.id} text={p.text} />)

  return (
    <div className={s.wrapper}>
      <div className='content'>
        <ProfileInfo />
        <div>My posts</div>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.post}>
          {newPost}
        </div>
      </div>
    </div>
  )
}

export default Profile
