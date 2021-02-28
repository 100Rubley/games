import s from './Header.module.css'
import Profile from './Profile/Profile.jsx'
import { NavLink } from 'react-router-dom'
import { BsEnvelopeOpenFill } from 'react-icons/bs'
import { ImUsers, ImNewspaper } from 'react-icons/im'
import { BiHeadphone } from 'react-icons/bi'
import { GiConsoleController } from 'react-icons/gi'
import { FaPlay } from 'react-icons/fa'

const Header = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperContent}>
        <Profile link='/profile' />

        <NavLink to='/dialogs' activeClassName={s.activeLink}>
          <div className={s.iconWrapper}>
            <BsEnvelopeOpenFill size='1.8em' />
          </div>
        </NavLink>

        <NavLink to='/users' activeClassName={s.activeLink}>
          <div className={s.iconWrapper}>
            <ImUsers size='1.8em' />
          </div>
        </NavLink>

        <NavLink to='/news' activeClassName={s.activeLink}>
          <div className={s.iconWrapper}>
            <ImNewspaper size='1.8em' />
          </div>
        </NavLink>

        <NavLink to='/music' activeClassName={s.activeLink}>
          <div className={s.iconWrapper}>
            <BiHeadphone size='1.8em' />
          </div>
        </NavLink>

        <NavLink to='/videos' activeClassName={s.activeLink}>
          <div className={s.iconWrapper}>
            <FaPlay size='1.4em' />
          </div>
        </NavLink>

        <NavLink to='/games' activeClassName={s.activeLink}>
          <div className={s.iconWrapper}>
            <GiConsoleController size='1.8em' />
          </div>
        </NavLink>

        <div className={s.loginBlock}>
          {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </div>
    </div>
  )
}

export default Header
