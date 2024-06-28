const INITIAL_COL = 7;

class Game {
  constructor() {
    this.board = new Board();
    this.printer = new ScreenPrinter();
    this.currentShape = new Shape(INITIAL_COL);
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => {
      this.reprint();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  reprint() {
    this.printer.clear();
    this.printer.drawShape(this.currentShape);
    this.printer.drawBoard(this.board);
    this.currentShape.moveDown();
    this.handleCollisions();
  }

  handleCollisions() {
    const shape = this.currentShape;
    const board = this.board;
    const shapeCoords = shape.getRealCoordinates();
    const outOfBounds = board.isOutOfBounds(shapeCoords);
    const hasCollision = board.hasCollision(shapeCoords);
  
    if (outOfBounds || hasCollision) {
      shape.restorePreviousPosition();
      board.addSquares(shape.getRealCoordinates(), shape.color);
      this.currentShape = new Shape(INITIAL_COL);
    }
  }
}

(new Game()).start();
