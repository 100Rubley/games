import s from './Icons.module.css'

const Icons = (props) => {
  return (
    <div className={s.wrapper}>
      <a href={props.link}>
        <img src="#" alt="Icon" />
      </a>
    </div>
  )
}

export default Icons
