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
        this.currentShape.moveDown();
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
}

(new Game()).start();
