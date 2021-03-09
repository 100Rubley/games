import Preloader from '../../common/Preloader/Preloader'
import ProfileContent from './ProfileContent'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) { return Preloader }

  return (
    <div className={s.headerWrapper}>
      <div className={s.photoContainer}>
        <img src={props.profile.photos.small} alt="Profile" />
        <div className={s.name}>{props.profile.fullName}</div>
        <div className={s.status}>
          <ProfileStatus status={props.status}
            updateStatus={props.updateStatus} />
        </div>
      </div>

      <ProfileContent profile={props.profile} />

    </div>
  )
}

export default ProfileInfo
