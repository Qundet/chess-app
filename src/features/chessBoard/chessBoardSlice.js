import { createSlice } from "@reduxjs/toolkit";

//Chess business modules
// import { Board } from "../../modules/board";

export const chessBoardSlice = createSlice({
  name: "chessBoard",
  initialState: {
    cells: [],
    playerColor: "W",
  },
  reducers: {
    initBoard: (state) => {
      //init cells
      for (let i = 0; i < 8; i++) {
        let row = [];
        for (let j = 0; j < 8; j++)
          row.push({ piece: "N", H: i, V: j, marked: false });
        state.cells.push(row);
      }
      //Set pieces
      //pawns
      for (let i = 0; i < 8; i++) {
        state.cells[1][i].piece = "BP"; // black pawns
        state.cells[6][i].piece = "WP"; // white
      }
      // knights
      state.cells[0][1].piece = "BN"; // black
      state.cells[0][6].piece = "BN";
      state.cells[7][1].piece = "WN"; // white
      state.cells[7][6].piece = "WN";
      // bishops
      state.cells[0][2].piece = "BB"; // black
      state.cells[0][5].piece = "BB";
      state.cells[7][2].piece = "WB"; // white
      state.cells[7][5].piece = "WB";
      // the roooooooks
      state.cells[0][0].piece = "BR"; // black
      state.cells[0][7].piece = "BR";
      state.cells[7][0].piece = "WR"; // white
      state.cells[7][7].piece = "WR";
      // queens
      state.cells[0][3].piece = "BQ"; // black
      state.cells[7][3].piece = "WQ"; // white
      // kings
      state.cells[0][4].piece = "BK"; // black
      state.cells[7][4].piece = "WK"; // white
    },
    // moving piece
    makeMove(state, { payload }) {
      const from = payload.from;
      const to = payload.to;
      state.cells[to.H][to.V].piece = state.cells[from.H][from.V].piece;
      state.cells[from.H][from.V].piece = "N";
    },
  },
});

export const { initBoard, makeMove } = chessBoardSlice.actions;
export default chessBoardSlice.reducer;
