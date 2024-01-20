import React from "react";

import styles from "./ChessBoard.module.css";

import Cell from "../Cell/Cell";
import Piece from "../Piece/Piece";

import { useDispatch, useSelector } from "react-redux";
import { initBoard } from "../../features/chessBoard/chessBoardSlice";

function ChessBoard() {
  const cells = useSelector((state) => state.chessBoard.cells);
  const playerColor = useSelector((state) => state.chessBoard.playerColor);
  const dispatch = useDispatch();

  const isDraggable = (pieceColor) => pieceColor === playerColor;

  return (
    <>
      <div className={styles.chess_board}>
        {cells.map((row) =>
          row.map((cell, id) => (
            <Cell key={id} cell={cell}>
              {cell.piece !== "N" ? (
                <Piece cell={cell} draggable={isDraggable(cell.piece[0])} />
              ) : null}
            </Cell>
          ))
        )}
      </div>
      <button onClick={() => dispatch(initBoard())}>INIT</button>
    </>
  );
}

export default ChessBoard;
