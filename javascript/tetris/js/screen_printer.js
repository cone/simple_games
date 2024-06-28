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
          this.drawSquare(col, row, board.grid[row][col]);
        }
      }
    }

    drawShape(shape) {
      shape.getRealCoordinates().forEach(([col, row]) => {
        this.drawSquare(col, row, shape.color);
      });
    }

    drawSquare(x = null, y = null, color = "cyan") {
      if (!color) return;

      const xInPixels = x * SQUARE_SIZE;
      const yInPixels = y * SQUARE_SIZE;
      this.ctx.fillStyle = color;
      this.ctx.fillRect(xInPixels, yInPixels, SQUARE_SIZE, SQUARE_SIZE);
      this.ctx.lineWidth = SQUARE_LINE_WIDTH;
      this.ctx.strokeStyle = SQUARE_STROKE_STYLE;
      this.ctx.strokeRect(xInPixels, yInPixels, SQUARE_SIZE, SQUARE_SIZE);
    }

    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
