import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiGithub } from 'react-icons/fi'
import { CgWebsite } from 'react-icons/cg'
import { TiSocialVimeo } from 'react-icons/ti'

const ProfileInfo = (props) => {
  if (!props.profile) { return Preloader }

  return (
    <div className={s.profileWrapper}>
      
      <div className={s.headerWrapper}>
        <div className={s.photoContainer}>
          <img src={props.profile.photos.small} alt="Profile" />
          <div className={s.name}>{props.profile.fullName}</div>
        </div>

        <div className={s.icons}>
          {props.profile.contacts.facebook &&
            <a href={props.profile.contacts.facebook}><FiFacebook /></a>}

          {props.profile.contacts.website &&
            <a href={props.profile.contacts.website}><CgWebsite /></a>}

          {props.profile.contacts.vk &&
            <a href={props.profile.contacts.vk}><TiSocialVimeo /></a>}

          {props.profile.contacts.twitter &&
            <a href={props.profile.contacts.twitter}><FiTwitter /></a>}

          {props.profile.contacts.instagram &&
            <a href={props.profile.contacts.instagram}><FiInstagram /></a>}

          {props.profile.contacts.youtube &&
            <a href={props.profile.contacts.youtube}><FiYoutube /></a>}

          {props.profile.contacts.github &&
            <a href={props.profile.contacts.github}><FiGithub /></a>}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
