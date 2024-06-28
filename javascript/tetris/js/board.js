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
      [null, null, null, "red", "red", null, null, null, null, null, null, null, null, null]
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

  isOutOfBounds(coords) {
    return coords.find(([row, col]) => {
      if (row >= this.height || col < 0 || col >= this.width) {
        return true;
      }
    });
  }

  addSquaresToBoard() {

  }
}
