import React from "react";

import styles from "./Piece.module.css";

import WK from "../../assets/chess_pieces/WK.png";
import WQ from "../../assets/chess_pieces/WQ.png";
import WR from "../../assets/chess_pieces/WR.png";
import WB from "../../assets/chess_pieces/WB.png";
import WN from "../../assets/chess_pieces/WN.png";
import WP from "../../assets/chess_pieces/WP.png";

import BK from "../../assets/chess_pieces/BK.png";
import BQ from "../../assets/chess_pieces/BQ.png";
import BR from "../../assets/chess_pieces/BR.png";
import BB from "../../assets/chess_pieces/BB.png";
import BN from "../../assets/chess_pieces/BN.png";
import BP from "../../assets/chess_pieces/BP.png";

let pieceIcons = {
  WK: WK,
  WQ: WQ,
  WR: WR,
  WB: WB,
  WN: WN,
  WP: WP,
  BK: BK,
  BQ: BQ,
  BR: BR,
  BB: BB,
  BN: BN,
  BP: BP,
};

function Piece({ cell, draggable }) {
  //dragging
  function dragStart(e) {
    e.dataTransfer.setData("droped", `${cell.H}${cell.V}`);

    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  }

  function dragEnd(e) {
    e.target.style.display = "block";
    // e.stopPropagation();
  }

  return (
    <div
      onDragStart={dragStart}
      // onDragOver={dragOver}
      onDragEnd={dragEnd}
      id={cell.piece}
      className={styles.piece}
      draggable={draggable}
      // style={draggable ? null : { background: "#000" }}
    >
      <img src={pieceIcons[cell.piece]} alt="*" draggable="false" />
    </div>
  );
}

export default Piece;
