import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  editModeOn = () => {
    this.setState({
      editMode: true
    })
  }

  editModeOff = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div className={s.wrapper}>
        {this.state.editMode
          ? <div>
            <input autoFocus={true}
              onBlur={this.editModeOff}
              value={this.state.status}
              onChange={this.onStatusChange} />
          </div>

          : <div>
            <span onDoubleClick={this.editModeOn}>{this.props.status || 'Enter your status'}</span>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus
