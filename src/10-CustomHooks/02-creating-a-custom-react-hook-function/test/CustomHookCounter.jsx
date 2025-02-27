import React, { useState } from "react";
import './CustomHookStyle.css'
const CustomHookCounter = () => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(20);

  const handler = () => {
    setIncrement(increment+ 1);
  };

  return (
    <React.Fragment>
      <button onClick={handler}>Increment</button>
      <button onClick={() => setDecrement(decrement-1)}>Decrement</button>
      <h2 className="custom-hook-counter">{increment}</h2>
      <h2 className="custom-hook-counter">{decrement}</h2>
    </React.Fragment>
  );
};

export default CustomHookCounter;
