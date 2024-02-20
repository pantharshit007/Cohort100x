// Button.js
import React, { useContext } from 'react';
import { CountContext } from '../App';

function Button() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Button;
