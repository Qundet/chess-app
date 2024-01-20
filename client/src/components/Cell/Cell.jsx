import React from "react";

import { useDispatch } from "react-redux";
import { makeMove } from "../../features/chessBoard/chessBoardSlice";

import styles from "./Cell.module.css";

function Cell(props) {
  const dispatch = useDispatch();
  //css options
  const color =
    (props.cell.V + props.cell.H) % 2 === 0 ? styles.white : styles.black;
  const marked = props.cell.marked ? styles.marked : null;

  // event handlers
  // dragging
  function drop(e) {
    e.preventDefault();
    const [H, V] = e.dataTransfer.getData("droped").split("");

    if (!H) return;

    const from = { H: parseInt(H), V: parseInt(V) }; // move piece from
    const to = { H: props.cell.H, V: props.cell.V }; // to

    if (from.H === to.H && from.V === to.V) return; // move cancel

    console.log(H, V, "] [", props.cell.H, props.cell.V);
    dispatch(makeMove({ from, to }));
  }

  function dragOver(e) {
    e.preventDefault();
  }
  //...
  return (
    <div
      onDrop={drop}
      onDragOver={dragOver}
      className={`${styles.cell} ${color} ${marked}`}
    >
      {props.children}
    </div>
  );
}

export default Cell;
