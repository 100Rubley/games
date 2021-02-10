import { rerenderEntireTree } from "../render"

let state = {
  dialogsPage: {
    dialogs: [{ id: 1, name: 'Vova' },
    { id: 2, name: 'Goga' },
    { id: 3, name: 'Lola' },
    { id: 4, name: 'Sosa' },
    { id: 5, name: 'UwU' },],
    messages: [{ id: 1, message: 'Hi' },
    { id: 2, message: "How're you doing?" },
    { id: 3, message: "What's next?" },]
  },
  profilePage: {
    posts: [{ id: 1, text: 'Hello, watcha doin?' },
    { id: 2, text: 'How are you?' },
    { id: 3, text: 'Sehr god, bitte' }
    ],
    newPostText: ''
  }
}

export let addPost = (message) => {
  let newPost = {
    id: 5,
    text: state.profilePage.newPostText
  }

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export default state
