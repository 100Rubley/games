// DOM elements
let canvas
let canvasContext

// Ball config
let ballX = 50
let ballY = 50
let ballSpeedX = 5
let ballSpeedY = 4

// Player's paddle config
const paddleHeight = 100
const paddleThickness = 10
let playerPaddleY = 250

// AI paddle config
let computerPaddleY = 250

// Score counter
let playerScore = 0
let computerScore = 0
const winningScore = 3

let showingWinScreen = false

// Calculate mouse position on canvas
function calculateMousePos(e) {
  let rect = canvas.getBoundingClientRect()
  let root = document.documentElement
  let mouseX = e.clientX - rect.left - root.scrollLeft
  let mouseY = e.clientY - rect.top - root.scrollTop

  return {
    x: mouseX,
    y: mouseY
  }
}

window.onload = function () {
  canvas = document.getElementById('gameCanvas')
  canvasContext = canvas.getContext('2d')

  let framesPerSecond = 30
  setInterval(() => {
    moveEverything()
    drawEverything()
  }, 1000 / framesPerSecond)

  // Reset the game
  canvas.addEventListener('click', mouseClickHandle)

  // Listen to mouse move and move players paddle
  canvas.addEventListener('mousemove', (e) => {
    let mousePos = calculateMousePos(e)
    playerPaddleY = mousePos.y - (paddleHeight / 2)
  })
}

// Reset the game
function mouseClickHandle(e) {
  if (showingWinScreen) {
    playerScore = 0
    computerScore = 0
    showingWinScreen = false
  }
}

function ballReset() {
  // Check for win
  if (playerScore >= winningScore || computerScore >= winningScore) {
    showingWinScreen = true
  }

  ballSpeedX = -ballSpeedX
  ballX = canvas.width / 2
  ballY = canvas.height / 2
}

function computerMovement() {
  let computerPaddleYCenter = computerPaddleY + (paddleHeight / 2)

  if (computerPaddleYCenter < ballY - 35) {
    computerPaddleY += 6
  } else if (computerPaddleYCenter > ballY + 35) {
    computerPaddleY -= 6
  }
}

function moveEverything() {
  if (showingWinScreen) {
    return
  }

  computerMovement()
  // Change ball position in X axis
  ballX += ballSpeedX

  // Reset the ball if it hits right edge
  if (ballX > canvas.width) {
    if (ballY > computerPaddleY &&
      ballY < computerPaddleY + paddleHeight) {
      ballSpeedX = -ballSpeedX

      // Add new angles after hitting the paddle
      let deltaY = ballY - (computerPaddleY + paddleHeight / 2)
      ballSpeedY = deltaY * 0.35
    } else {
      playerScore++
      ballReset()
    }
  }

  // Reset the ball if it hits left edge
  if (ballX < 0) {
    if (ballY > playerPaddleY &&
      ballY < playerPaddleY + paddleHeight) {
      ballSpeedX = -ballSpeedX

      // Add new angles after hitting the paddle
      let deltaY = ballY - (playerPaddleY + paddleHeight / 2)
      ballSpeedY = deltaY * 0.35
    } else {
      computerScore++
      ballReset()
    }
  }

  // Change ball position in Y axis
  ballY += ballSpeedY

  if (ballY > canvas.height) {
    ballSpeedY = -ballSpeedY
  }
  if (ballY < 0) {
    ballSpeedY = -ballSpeedY
  }
}

function drawNet() {
  for (let i = 0; i < canvas.height; i += 40) {
    drawRectangle(canvas.width / 2 - 1, i, 2, 20, 'white')
  }
}

function drawEverything() {
  // Draw start screen
  drawRectangle(0, 0, canvas.clientWidth, canvas.height, 'black')

  if (showingWinScreen) {
    if (playerScore >= winningScore) {
      canvasContext.fillStyle = 'white'
      canvasContext.fillText('Player won!', canvas.width / 2, canvas.height / 2)
    } else if (computerScore >= winningScore) {
      canvasContext.fillStyle = 'white'
      canvasContext.fillText('Computer won!', canvas.width / 2, canvas.height / 2)
    }
    canvasContext.fillStyle = 'white'
    canvasContext.fillText('click to continue', 100, 100)
    return
  }

  drawNet()

  // Draw players paddle (left one)
  drawRectangle(0, playerPaddleY, paddleThickness, paddleHeight, 'white')

  // Draw computer paddle (right one)
  drawRectangle(canvas.width - paddleThickness, computerPaddleY,
    paddleThickness, paddleHeight, 'white')

  // Draw the ball
  drawCircle(ballX, ballY, 10, 'white')

  // Draw score stats
  canvasContext.fillText(playerScore, 100, 100)
  canvasContext.fillText(computerScore, canvas.width - 100, 100)
}

function drawCircle(centerX, centerY, radius, color) {
  canvasContext.fillStyle = color
  canvasContext.beginPath()
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true)
  canvasContext.fill()
}

function drawRectangle(leftX, topY, width, height, color) {
  canvasContext.fillStyle = color
  canvasContext.fillRect(leftX, topY, width, height)
}
