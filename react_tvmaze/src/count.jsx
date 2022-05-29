/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return ( 
    <div className="d-flex justify-content-center pt-5 ">
      <button onClick={decrement} className="w-25 btn btn-primary">
        <h1>-</h1>
      </button>
      <h1 className="mx-5 ">{count}</h1>
      <button onClick={increment} className="w-25 btn btn-primary" >
        <h1>+</h1>
      </button>
    </div>
  );
};

export default Counter;
