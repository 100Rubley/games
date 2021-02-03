import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className = {s.wrapper}>
      <div className='content'>
        <ProfileInfo />
        <div>
          My posts
        <div>
            New post
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
