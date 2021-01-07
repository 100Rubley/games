export default class App {
  constructor(container) {
    // Create Canvas with 2D context
    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')
    // add class Canvas for CSS styling
    this.canvas.setAttribute('class', 'canvas')
    
    // put Canvas into wrapper
    container.appendChild(this.canvas)
  }

  print() {

    console.log(this.canvas.height)
  }

  drawNet() {
    this.print()
  }
}
