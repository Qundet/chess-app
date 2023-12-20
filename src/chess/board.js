import { Cell } from "./cell";

import { Bishop } from "./pieces/bishop";
import { King } from "./pieces/king";
import { Knight } from "./pieces/knight";
import { Pawn } from "./pieces/pawn";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";

export class Board {
  cells = [];

  readBoard(color) {
    // Init cells
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) row.push(new Cell({ H: i, V: j }));
      this.cells.push(row);
    }
    // Set pieces
    // pawns
    for (let i = 0; i < 8; i++) {
      this.cells[1][i].setPiece(new Pawn("black", "BP")); // black pawns
      this.cells[6][i].setPiece(new Pawn("white", "WP")); // white
    }
    // knights
    this.cells[0][1].setPiece(new Knight("black", "BN")); // black
    this.cells[0][6].setPiece(new Knight("black", "BN"));
    this.cells[7][1].setPiece(new Knight("white", "WN")); // white
    this.cells[7][6].setPiece(new Knight("white", "WN"));
    // bishops
    this.cells[0][2].setPiece(new Bishop("black", "BB")); // black
    this.cells[0][5].setPiece(new Bishop("black", "BB"));
    this.cells[7][2].setPiece(new Bishop("white", "WB")); // white
    this.cells[7][5].setPiece(new Bishop("white", "WB"));
    // the roooooooks
    this.cells[0][0].setPiece(new Rook("black", "BR")); // black
    this.cells[0][7].setPiece(new Rook("black", "BR"));
    this.cells[7][0].setPiece(new Rook("white", "WR")); // white
    this.cells[7][7].setPiece(new Rook("white", "WR"));
    // queens
    this.cells[0][3].setPiece(new Queen("black", "BQ")); // black
    this.cells[7][3].setPiece(new Queen("white", "WQ")); // white
    // kings
    this.cells[0][4].setPiece(new King("black", "BK")); // black
    this.cells[7][4].setPiece(new King("white", "WK")); // white
  }
}
