import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className={s.wrapper}>
      <div className='content'>
        <ProfileInfo />
        <div>My posts</div>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
