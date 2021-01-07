import config from './config.js'

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
  // Initial function
  init() {
    this.drawNet()
    this.drawObjects()



    console.log(`height = ${this.canvas.height}`)
    console.log(`width = ${this.canvas.width}`)
    console.log(`this.canvas = ${this.canvas}`)
    console.log(`this.canvas.fillStyle = ${this.context.fillStyle}`)
  }

  // Draw middle line
  drawNet() {
    for (let i = 0; i < this.canvas.height; i += 40) {
      this.drawRectangle((this.canvas.width / 2) - 1, i, 2, 20, 'white')
    }
  }

  // Draw players paddle, Computer paddle and a Ball
  drawObjects() {
    // Players paddle (left one)
    this.drawRectangle(0, config.playerPaddleY, config.playerPaddleThickness, config.playerPaddleHeight, 'white')

    // Computer paddle (left one)
    this.drawRectangle(this.canvas.width - config.computerPaddleThickness, config.computerPaddleY, config.computerPaddleThickness, config.computerPaddleHeight, 'white')
    
    // Ball
    this.drawCircle(config.ballX, config.ballY, 10, 'white')
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
