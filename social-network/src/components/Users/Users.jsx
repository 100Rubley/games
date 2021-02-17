import s from './Users.module.css'

let Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, followed: true, userName: 'Arina', nickName: '@arishaStar', status: 'Hello!', photoUrl: '#' },
      { id: 2, followed: true, userName: 'Vova', nickName: '@vova4etko', status: 'What\'s up?', photoUrl: '#' },
      { id: 3, followed: false, userName: 'Sasha', nickName: '@sanyaMaloy', status: 'Add me, i\'m alone', photoUrl: '#' }
    ])
  }

  return (
    <div></div>
  )
}


export default Users
