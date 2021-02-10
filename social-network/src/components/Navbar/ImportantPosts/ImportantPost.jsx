import s from './ImportantPost.module.css'

const ImportantPost = (props) => {
  return (
    <div className={s.postWrapper}>
        <div className={s.postHeader}>
          {props.headerTitle}
        </div>
        <div className = {s.postContent}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, doloribus.
        </div>
      </div>
  )
}

export default ImportantPost
