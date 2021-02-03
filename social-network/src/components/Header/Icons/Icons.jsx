import { NavLink } from 'react-router-dom'
import s from './Icons.module.css'

const Icons = (props) => {
  return (
    <div className={s.wrapper}>
      <NavLink to={props.link} activeClassName = {s.activeLink}>
        <img src="#" alt="Icon" />
      </NavLink>
    </div>
  )
}

export default Icons
