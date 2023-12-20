export class Cell {
  piece = null;
  marked = false;
  constructor(coords) {
    this.coords = coords;
  }

  setPiece(piece) {
    this.piece = piece;
  }
  deletePiece() {}
}
