const INITIAL_COL = 7;

class Game {
  constructor() {
    this.board = new Board();
    this.printer = new ScreenPrinter();
    this.currentShape = new Shape(INITIAL_COL);
    this.interval = null;
    setEventListeners(this);
  }

  start() {
    this.interval = setInterval(() => {
      this.handleShape();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  handleShape() {
    this.reprint();
    this.currentShape.moveDown();
    this.handleCollisions();
  }

  reprint() {
    this.printer.clear();
    this.printer.drawShape(this.currentShape);
    this.printer.drawBoard(this.board);
  }

  shapeCoords() {
    return this.currentShape.getRealCoordinates();
  }

  handleCollisions() {
    const shape = this.currentShape;
    const board = this.board;
    const shapeCoords = this.shapeCoords();
    const isAtBottom = board.isAtBottom(shapeCoords);
    const hasCollision = board.hasCollision(shapeCoords);
  
    if (isAtBottom || hasCollision) {
      if (hasCollision) shape.restorePreviousPosition();
      board.addSquares(this.shapeCoords(), shape.color);
      this.currentShape = new Shape(INITIAL_COL);
    }
  }

  shapeIsAtLeftEdge() {
    return this.board.isAtLeftSideEdge(this.shapeCoords());
  }

  shapeIsAtRightEdge() {
    return this.board.isAtRightSideEdge(this.shapeCoords());
  }
}

(new Game()).start();
