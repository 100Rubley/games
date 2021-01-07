import App from './App.js'

window.onload = () => {
  new App(document.querySelector('.canvas-game')).init()
}

