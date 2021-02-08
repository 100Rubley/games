import s from './MyPost.module.css'

const MyPost = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img src="#" alt="profilePhoto" />
      </div>
      <div className={s.postText}>{props.text}</div>
    </div>
  )
}

export default MyPost
