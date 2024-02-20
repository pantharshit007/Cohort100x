import React from 'react'

function Button({ setCount}){
    return (
      <div>
        <button onClick={() => setCount(prev => prev+1)}>
          +</button>
  
        <button onClick={() => setCount(prev => prev-1)}>
          -</button>

        <button onClick={() => setCount(0)}>
          Reset</button>
      </div>
    )
  }
  

export default Button