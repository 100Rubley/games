import s from './Header.module.css'

const Header = () => {
  return (
    <div className = {s.wrapper}>
      <div className = {s.item}>Profile</div>
      <div className = {s.item}>Messeges</div>
      <div className = {s.item}>News</div>
      <div className = {s.item}>Music</div>
      <div className = {s.item}>Settings</div>
    </div>
  )
}

export default Header
