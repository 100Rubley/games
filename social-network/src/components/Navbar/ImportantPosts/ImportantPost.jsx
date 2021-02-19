import s from './ImportantPost.module.css'
import { FaHeart, FaComment, FaShare } from 'react-icons/fa'
import csBob from './../../../assets/images/coolstorybob.jfif'

const ImportantPost = (props) => {
  return (
    <div className={s.postWrapper}>
        <div className={s.postHeader}>
          <div className={s.postOwner}>
            <div className={s.ownerName}>Sam Crofts</div>
            <div className={s.ownerNickname}>@sam666</div>
          </div>
          <div className={s.meme}>
            <img src={csBob} 
            alt="Insert meme here"/>
          </div>
        </div>
        <div className = {s.postContent}>
          I'm going to tell you another story...
        </div>
        <div className={s.iconsContainer}>
          <FaHeart size='1.2em'/>
          <FaComment size='1.2em'/>
          <FaShare size='1.2em'/>
        </div>
      </div>
  )
}

export default ImportantPost
