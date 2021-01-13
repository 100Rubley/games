import config from './config.js'

// Some usefull Variables from config.js
let ballX = config.ballX
let ballY = config.ballY
let ballSpeedX = config.ballSpeedX
let ballSpeedY = config.ballSpeedY
let playerPaddleHeight = config.playerPaddleHeight
let computerPaddleHeight = config.computerPaddleHeight
let computerPaddleThickness = config.computerPaddleThickness
let computerPaddleY = config.computerPaddleY

export let playerPaddleThickness = config.playerPaddleThickness
export let playerPaddleY = config.playerPaddleY

let winningScore = config.winningScore
let playerScore = 0
let computerScore = 0

let showingWinScreen = false

export default class App {
  constructor(container) {
    // Create Canvas with 2D context
    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')

    // Add class Canvas for CSS styling
    this.canvas.setAttribute('class', 'canvas')

    // Set Width and Height of Canvas (insert this into Config file)
    this.canvas.setAttribute('width', '800px')
    this.canvas.setAttribute('height', '600px')

    // Put Canvas into wrapper
    container.appendChild(this.canvas)
  }

  showWinScreen() {
    console.log('You win!')
  }

  // Move players paddle
  playerMove(e) {
    let mousePos = this.calculateMousePosition(e)
    playerPaddleY = mousePos.y - (playerPaddleHeight / 2)
  }

  // Calculate players paddle position
  calculateMousePosition(e) {
    let rect = this.canvas.getBoundingClientRect()
    let root = document.documentElement
    let mouseX = e.clientX - rect.left - root.scrollLeft
    let mouseY = e.clientY - rect.top - root.scrollTop

    return {
      x: mouseX,
      y: mouseY
    }
  }

  // Computer paddle moving pattern
  computerMovement() {
    let computerPaddleYCenter = computerPaddleY + (computerPaddleHeight / 2)

    if (computerPaddleYCenter < (ballY - computerPaddleHeight / 7)) {
      computerPaddleY += 6
    } else if (computerPaddleYCenter > (ballY + computerPaddleHeight / 7)) {
      computerPaddleY -= 6
    }
  }

  ballReset() {
    // Check for win
    if (playerScore >= winningScore || computerScore >= winningScore) {
      showingWinScreen = true
    }

    ballSpeedX = -ballSpeedX
    ballX = this.canvas.width / 2
    ballY = this.canvas.height / 2
  }

  // Move all objects once
  moveObjects() {
    if (showingWinScreen) return

    this.computerMovement()

    // Change ball position in X and Y axis
    ballX += ballSpeedX
    ballY += ballSpeedY

    if (ballY > this.canvas.height) {
      ballSpeedY = -ballSpeedY
    }
    if (ballY < 0) {
      ballSpeedY = -ballSpeedY
    }

    // Reset the Ball after hitting right edge
    if (ballX > this.canvas.width) {
      if (ballY > computerPaddleY && ballY < (computerPaddleY + computerPaddleHeight)) {
        ballSpeedX = -ballSpeedX

        // Add new angles after hitting the paddle
        let deltaY = ballY - (computerPaddleY + computerPaddleHeight / 2)
        ballSpeedY = deltaY * 0.35
      } else {
        playerScore++
        this.ballReset()
      }
    }
    // Reset the Ball after hitting left edge
    if (ballX < 1) {
      if (ballY > playerPaddleY && ballY < (playerPaddleY + playerPaddleHeight)) {
        ballSpeedX = -ballSpeedX

        // Add new angles after hitting the paddle
        let deltaY = ballY - (playerPaddleY + playerPaddleHeight / 2)
        ballSpeedY = deltaY * 0.35
      } else {
        computerScore++
        this.ballReset()
      }
    }
  }

  // Draw players paddle, Computer paddle and a Ball
  drawObjects() {
    // Draw Canvas every frame 
    this.drawRectangle(0, 0, this.canvas.clientWidth, this.canvas.clientHeight, 'black')

    // Show the End-Of-The-Game-Window
    if (showingWinScreen) {
      this.showWinScreen()
    }

    this.drawNet()

    // Players paddle (left one)
    this.drawRectangle(0, playerPaddleY, playerPaddleThickness, playerPaddleHeight, 'white')

    // Computer paddle (left one)
    this.drawRectangle(this.canvas.width - computerPaddleThickness, computerPaddleY, computerPaddleThickness, computerPaddleHeight, 'white')

    // Ball
    this.drawCircle(ballX, ballY, 10, 'white')
  }

  // Draw middle line
  drawNet() {
    for (let i = 0; i < this.canvas.height; i += 40) {
      this.drawRectangle((this.canvas.width / 2) - 1, i, 2, 20, 'white')
    }
  }

  // Draw a rectangle or cercle with certain parametres
  drawRectangle(leftX, topY, width, height, color) {
    this.context.fillStyle = color
    this.context.fillRect(leftX, topY, width, height)
  }
  drawCircle(centerX, centerY, radius, color) {
    this.context.fillStyle = color
    this.context.beginPath()
    this.context.arc(centerX, centerY, radius, 0, Math.PI * 2, true)
    this.context.fill()
  }
}
