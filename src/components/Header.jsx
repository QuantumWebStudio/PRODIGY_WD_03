import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-center p-4 text-4xl">
      <h1>Tic Tac Toe</h1>
    </header>
  );
};

export default Header;
