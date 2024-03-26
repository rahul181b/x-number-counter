import React from "react";
import { useState } from "react";
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div >
      <h1>Counter App</h1>
      <p>
        Count: {value}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  );
}

export default App;
