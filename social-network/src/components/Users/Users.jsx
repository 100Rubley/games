import s from './Users.module.css'
import React from 'react'
import * as axios from 'axios'


class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => this.props.setUsers(response.data.items))
  }


  render() {
    return (
      <div className={s.wrapper}>
        {this.props.users.map(u => <div key={u.id} className={s.userWrapper}>
          <div className={s.followPlace}>
            <div className={s.photo}>
              <img src={u.photos.small != null ? u.photo.small : '#'} alt="User" />
            </div>
            <div className={s.button}>
              {u.followed
                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
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
    )
  }
}

export default Users
