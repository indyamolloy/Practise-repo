import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Name from "./Name";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Name name="indya" />
      <Card>
        <p>hello</p>
        <Card>
          <p className="paragraph">world</p>
        </Card>
      </Card>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
