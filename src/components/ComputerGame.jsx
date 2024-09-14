import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Square({ value, onClick }) {
  return (
    <button
      className="w-24 h-24 border border-gray-400 text-3xl font-bold flex items-center justify-center"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isUserNext, setIsUserNext] = useState(true); // Tracks if it's the user's turn
  const [gameOver, setGameOver] = useState(false);
  const [winnerMessage, setWinnerMessage] = useState(""); // To display who won

  // When the user clicks a square
  const handleClick = (index) => {
    if (gameOver || squares[index] || !isUserNext) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = "X"; // User is always 'X'
    setSquares(newSquares);
    setIsUserNext(false);
  };

  // Computer makes a move
  const computerMove = () => {
    if (gameOver) return;

    const emptySquares = squares
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);

    if (emptySquares.length === 0) return; // No available moves (in case of tie)

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const chosenSquare = emptySquares[randomIndex];

    const newSquares = squares.slice();
    newSquares[chosenSquare] = "O"; // Computer is always 'O'
    setSquares(newSquares);
    setIsUserNext(true);
  };

  // Check for winner or tie after each move
  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setGameOver(true);
      setWinnerMessage(winner === "X" ? "You won!" : "Computer won!");
      return;
    }

    // If it's not the user's turn, make the computer move
    if (!isUserNext && !gameOver) {
      setTimeout(computerMove, 500); // Add delay to simulate thinking time
    }
  }, [squares, isUserNext]);

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const status =
    squares.every((square) => square !== null) && !gameOver
      ? "It's a tie!"
      : isUserNext
      ? "Next player: X (You)"
      : "Next player: O (Computer)";

  return (
    <div className="flex flex-col items-center">
      <div className="status text-2xl mb-4">
        {gameOver ? winnerMessage : status}
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
  return (
    <div className="min-h-screen flex items-center flex-col gap-4 justify-center bg-gray-100">
      <Board />
      <div>
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
