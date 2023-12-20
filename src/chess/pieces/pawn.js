import { Piece } from "../piece";

export class Pawn extends Piece {
  getAvaiableCells(board, coords) {
    let avaiableCells = [];

    //check horizontal borders
    if (coords.H > 0) {
      avaiableCells.push({ H: coords.H - 1, V: coords.V });
      //check vertical borders
      if (coords.V > 0 && coords.V < 7) {
        avaiableCells.push({ H: coords.H - 1, V: coords.V + 1 });
        avaiableCells.push({ H: coords.H - 1, V: coords.V - 1 });
      }
    }
    return avaiableCells;
  }
}
