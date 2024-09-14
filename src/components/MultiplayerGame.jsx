import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Square({ value, onClick }) {
  return (
    <button
      className="w-28 h-28 border-4 border-gray-400  text-3xl font-bold flex items-center justify-center"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    alert("Player Won");
    status = `Winner: ${winner}`;
  } else {
    status = `player: ${isXNext ? "X" : "O"}`;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="status text-2xl mb-4 border-2 bg-amber-500 text-white px-4 py-2 rounded-xl">
        {status}
      </div>
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => renderSquare(i))}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function MultiplayerGame() {
  useEffect(() => {
    alert("LETS START THE GAME!");
  }, []);

  return (
    <div className="min-h-screen flex gap-4 flex-col items-center justify-center bg-gray-100">
      <Board />
      <div className="flex justify-center items-center gap-3 ">
        <button
          onClick={() => window.location.reload()}
          className=" text-2xl border-2 px-3 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-400 shadow-md"
        >
          Reset
        </button>
        <NavLink
          to="/"
          className=" text-2xl border-2 px-3 py-2 rounded-2xl bg-red-500 text-white hover:bg-red-400 shadow-md"
        >
          Return
        </NavLink>
      </div>
    </div>
  );
}
