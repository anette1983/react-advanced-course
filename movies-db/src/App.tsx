import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>
            <Link to="/" className="App-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="App-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/movies" className="App-link">
              Movies
            </Link>
          </li>
        </ul>
      </header>
      <main className="App-main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
