import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.imgWrapper}>
        <img src="#" alt="profilePhoto" />
      </div>
      <div className={s.postText}>{props.text}</div>
    </div>
  )
}

export default Post
