import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [note, setNote] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    setNote([...note, input]);
  }

  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>Enter</button>
      <ul>
        {note.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
