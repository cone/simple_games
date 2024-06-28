const SHAPES = [
  [[0,0], [0,1], [1,0], [1,1]], // square
  [[0,0], [0,1], [0,2], [0,3]], // line
  [[0,0], [1,0], [2,0], [3,0]], // horizontal line
  [[0,0], [1,0], [2,0], [3,0]], // L
  [[0,0], [1,0], [2,0], [2,1]], // inverted L
  [[0,0], [1,0], [2,0], [2,-1]], // T
  [[0,0], [1,0], [1,1], [2,0]], // Right side T
  [[0,0], [1,0], [1,1], [2,1]], // S shaped shape
];
const COLORS = ["cyan", "red", "green", "yellow", "pink", "blue"];

class Shape {
  constructor(col = 0, row = 0) {
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    this.col = col;
    this.row = row;
  }

  moveDown() {
    this.row++;
  }

  getRealCoordinates() {
    return this.shape.map(([col, row]) => [col + this.col, row + this.row]);
  }
}
