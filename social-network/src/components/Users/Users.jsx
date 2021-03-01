import s from './Users.module.css'
import React from 'react'
import profilePhoto from './../../assets/images/profilePhoto.jfif'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= 10; i++) {
    pages.push(i)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.pagesCounter}>
        {pages.map(p => {
          return <div className={props.currentPage === p && s.selectedPage}
            onClick={(e) => { props.onPageChanged(p) }}>
            {p}
          </div>
        })}
      </div>
      <div className={s.usersWrapper}>
        {props.users.map(u => <div key={u.id} className={s.userWrapper}>
          <div className={s.followPlace}>
            <div className={s.photo}>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photo.small : profilePhoto} alt="User" />
              </NavLink>
            </div>
            <div className={s.button}>
              {u.followed
                ? <button onClick={() => {
                  usersAPI.unfollow(u.id)
                    .then(resultCode => {
                      if (resultCode === 0) {
                        props.unfollow(u.id)
                      }
                    })

                }}>Unfollow</button>
                : <button onClick={() => {
                  usersAPI.follow(u.id)
                    .then(resultCode => {
                      if (resultCode === 0) {
                        props.follow(u.id)
                      }
                    })

                }}>Follow</button>
              }
            </div>
          </div>
          <div className={s.description}>
            <div className={s.user}>
              <div className={s.profileName}>{u.name}</div>
              <div className={s.nickName}>NickName here</div>
            </div>
            <div className={s.status}>Any status here</div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Users
