import s from './Navbar.module.css'
import Post from './Posts/Post'

const Navbar = () => {
  return (
    <div className={s.wrapper}>
      <Post headerTitle = 'Post1'/>
      <Post headerTitle = 'Post2'/>
    </div>
  )
}

export default Navbar
