import s from './Navbar.module.css'
import ImportantPost from './ImportantPosts/ImportantPost'

const Navbar = () => {
  return (
    <div className={s.wrapper}>
      <ImportantPost headerTitle = 'Post1'/>
      <ImportantPost headerTitle = 'Post2'/>
    </div>
  )
}

export default Navbar
