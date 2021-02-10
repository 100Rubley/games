import React from 'react'
import MyPost from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

  return (
    <div className={s.wrapper}>
      <ProfileInfo />
      <MyPost posts={props.state.posts}/>
    </div>
  )
}

export default Profile
