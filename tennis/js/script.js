import App from './App.js'

window.onload = () => {
  let game = new App(document.querySelector('.canvas-game'))
  let canvasGame = document.querySelector('.canvas-game')
  let FPS = 30 //grab this later from config.js
  
  setInterval(() => {
    game.moveObjects()
    game.drawObjects()
    
  }, 1000 / FPS)

  canvasGame.addEventListener('mousemove', (e) => {
    game.playerMove(e)
  })
}

