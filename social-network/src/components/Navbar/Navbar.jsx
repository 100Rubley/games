import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={s.wrapper}>

      <div className={s.postWrapper}>
        <div className={s.postHeader}>
          Post Heder 1
        </div>
        <div className = {s.postContent}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, doloribus.
        </div>
      </div>
      
      <div className={s.postWrapper}>
        <div className={s.postHeader}>
          Post Heder 2
        </div>
        <div className = {s.postContent}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, doloribus.
        </div>
      </div>
    </div>
  )
}

export default Navbar
