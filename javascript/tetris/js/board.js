class Board {
  constructor() {
    this.grid = [
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      ["red", null, null, "red", null, null, null, null, null, null, null, null, null, null],
      [null, null, null, "red", null, null, null, null, null, null, null, null, null, null],
      ["red", "red", "red", "red", "red", "red", "red", "red", null, null, null, null, null, "cyan"]
    ];
    this.height = this.grid.length;
    this.width = this.grid[0].length;
  }

  hasCollision(coords) {
    const stringCoords = coords.map((coords) => coords.join(","));
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        const current_coords = `${row},${col}`;
        if (this.grid[row][col] && stringCoords.includes(current_coords)) {
          return true;
        }
      }
    }
    return false;
  }

  isAtBottom(coords) {
    return coords.find(([row, _]) => {
      if ((row + 1) >= this.height) {
        return true;
      }
    });
  }

  isAtLeftSideEdge(coords) {
    return coords.find(([_, col]) => (col - 1) < 0);
  }

  isAtRightSideEdge(coords) {
    return coords.find(([_, col]) => (col + 1) > (this.width - 1));
  }

  addSquares(coords, color) {
    coords.forEach(([row, col]) => {
      this.grid[row][col] = color;
    });
  }
}
