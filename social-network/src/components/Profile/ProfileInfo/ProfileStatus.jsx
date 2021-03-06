import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  editModeOn() {
    this.setState({
      editMode: true
    })
  }

  editModeOff() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div className={s.wrapper}>
        {/* {this.props.status} */}
        {/* тестовый вариант, нет запроса на сервер */}
        {this.state.editMode
          ?<div>
            <input autoFocus={true} onBlur={this.editModeOff.bind(this)} value={this.props.status} />
          </div>

          :<div>
            <span onDoubleClick={this.editModeOn.bind(this)}>{this.props.status}</span>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus
