class Game {
  constructor() {
    this.board = new Board();
    this.printer = new ScreenPrinter();
    this.currentShape = new Shape();
    this.interval = null;
  }

  start() {
    const reprint = () => {
      this.printer.clear();
      this.printer.drawBoard(this.board);
      this.moveShapeDown();
      this.printer.drawShape(this.currentShape);
    }
    reprint.bind(this);
    this.interval = setInterval(function() {
      reprint();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  moveShapeDown() {
    this.currentShape.moveDown();
    const shapeCoords = this.currentShape.getRealCoordinates();
    const outOfBounds = this.board.isOutOfBounds(shapeCoords);
    const hasCollision = this.board.hasCollision(shapeCoords);
  
    if (outOfBounds || hasCollision) {
      this.currentShape.restorePreviousPosition();
    }
  }
}

(new Game()).start();
