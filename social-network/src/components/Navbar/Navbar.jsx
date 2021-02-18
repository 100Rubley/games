import s from './Navbar.module.css'
import ImportantPost from './ImportantPosts/ImportantPost'
import Helper from './Helper/Helper'

const Navbar = () => {
  return (
    <div className={s.wrapper}>
      <ImportantPost />
      <ImportantPost />
      <Helper />
    </div>
  )
}

export default Navbar
