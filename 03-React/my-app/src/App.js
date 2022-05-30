import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [input, setInput] = useState("");
  const [note, setNote] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    setNote([...note, input]);
    setInput("");
  }

  function handleDelete(index) {
    setNote((note) => note.filter((item, i) => i !== index));
  }

  function handleEdit(index) {
    setInput(note[index]);
    setNote([...note.splice]);
  }

  return (
    <div>
      <input onChange={handleChange} value={input}></input>
      <button onClick={handleClick}>Enter</button>
      <ul>
        {note.map((item, index) => (
          <li key={uuidv4()} index={index}>
            {item} <button onClick={() => handleDelete(index)}>X</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
