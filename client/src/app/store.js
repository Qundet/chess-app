import { configureStore } from "@reduxjs/toolkit";
import chessBoardReducer from "../features/chessBoard/chessBoardSlice";

export default configureStore({
  reducer: {
    chessBoard: chessBoardReducer,
  },
});
