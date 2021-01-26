import s from './Header.module.css'
import Icons from './Icons/Icons'
import Profile from './Profile/Profile.jsx'

const Header = () => {
  return (
    <div className = {s.wrapper}>
      <Profile />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
    </div>
  )
}

export default Header
