import profileImg from './../../../assets/images/profileImg.jfif'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={profileImg} alt='profile_pict' />
      </div>
      <div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo
