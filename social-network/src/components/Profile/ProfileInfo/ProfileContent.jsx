import s from './ProfileInfo.module.css'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiGithub, FiThumbsDown, FiThumbsUp } from 'react-icons/fi'
import { CgWebsite } from 'react-icons/cg'
import { TiSocialVimeo } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const ProfileContent = (props) => {
  return (
    <div className={s.content}>
      
      <div className={s.icons}>
        {props.profile.contacts.facebook &&
          <NavLink to={props.profile.contacts.facebook}><FiFacebook size='2em' /></NavLink>}

        {props.profile.contacts.website &&
          <NavLink to={props.profile.contacts.website}><CgWebsite size='2em' /></NavLink>}

        {props.profile.contacts.vk &&
          <NavLink to={props.profile.contacts.vk}><TiSocialVimeo size='2em' /></NavLink>}

        {props.profile.contacts.twitter &&
          <NavLink to={props.profile.contacts.twitter}><FiTwitter size='2em' /></NavLink>}

        {props.profile.contacts.instagram &&
          <NavLink to={props.profile.contacts.instagram}><FiInstagram size='2em' /></NavLink>}

        {props.profile.contacts.youtube &&
          <NavLink to={props.profile.contacts.youtube}><FiYoutube size='2em' /></NavLink>}

        {props.profile.contacts.github &&
          <NavLink to={props.profile.contacts.github}><FiGithub size='2em' /></NavLink>}
      </div>

      <div className={s.jobContent}>
        {props.profile.lookingForAJob ? <FiThumbsUp size='3em' /> : <FiThumbsDown size='3em' />}
        <div className={s.jobDescription}> {props.profile.lookingForAJobDescription} </div>
      </div>
    </div>
  )
}

export default ProfileContent
