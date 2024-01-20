import "./App.css";

import DragTest from "./components/DragTest";

import ChessBoard from "./components/ChessBoard/ChessBoard";

function App() {
  return (
    <div className="App">
      <ChessBoard />
      <DragTest />
    </div>
  );
}

export default App;
