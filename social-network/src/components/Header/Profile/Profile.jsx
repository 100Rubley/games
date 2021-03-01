import { NavLink } from 'react-router-dom'
import s from './Profile.module.css'
import profilePhoto from './../../../assets/images/profilePhoto.jfif'

const Profile = (props) => {
  return (
    <div className={s.wrapper}>
      <img src={profilePhoto} alt="Profile_picture" />
      <div className={s.textWrapper}>
        <NavLink to={props.link} activeClassName={s.activeLink}>
          <div className={s.profileName}>{props.login}</div>
        </NavLink>
        <div className={s.userNickname}>@sam666</div>
      </div>
    </div>
  )
}

export default Profile
