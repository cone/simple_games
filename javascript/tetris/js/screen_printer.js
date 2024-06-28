const SQUARE_SIZE = 30;
const SQUARE_LINE_WIDTH = 1;
const SQUARE_STROKE_STYLE = "black";

class ScreenPrinter {
  constructor() {
    this.canvas = document.getElementById("screen");
    this.ctx = this.canvas.getContext("2d");
  }

  drawBoard(board) {
    const rowSize = board.grid.length;
    const colSize = board.grid[0].length;
    for (let row = 0; row < rowSize; row++) {
      for (let col = 0; col < colSize; col++) {
        this.drawSquare(row, col, board.grid[row][col]);
      }
    }
  }

  drawShape(shape) {
    if (!shape) return;

    shape.getRealCoordinates().forEach(([row, col]) => {
      this.drawSquare(row, col, shape.color);
    });
  }

  drawSquare(x = null, y = null, color = "cyan") {
    if (!color) return;

    const xInPixels = x * SQUARE_SIZE;
    const yInPixels = y * SQUARE_SIZE;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(yInPixels, xInPixels, SQUARE_SIZE, SQUARE_SIZE);
    this.ctx.lineWidth = SQUARE_LINE_WIDTH;
    this.ctx.strokeStyle = SQUARE_STROKE_STYLE;
    this.ctx.strokeRect(yInPixels, xInPixels, SQUARE_SIZE, SQUARE_SIZE);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
