import s from './Header.module.css'
import Icons from './Icons/Icons'
import Profile from './Profile/Profile.jsx'

const Header = () => {
  return (
    <div className = {s.wrapper}>
      <Profile />
      <Icons link = 'dialogs'/>
      <Icons link = 'news'/>
      <Icons link = 'music'/>
      <Icons link = 'videos'/>
      <Icons link = 'games'/>
    </div>
  )
}

export default Header
