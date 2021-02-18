import s from './Helper.module.css'
import { FaQuestion } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'

const Helper = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.iconWrapper}>
          <FaQuestion size='1.2em'/>
        </div>
        <div className={s.headerText}>
          Help & Support
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.iconWrapper}>
          <IoMdSettings size='1.2em'/>
        </div>
        <div className={s.footerText}>
          Settings
        </div>
      </div>
    </div>
  )
}

export default Helper

