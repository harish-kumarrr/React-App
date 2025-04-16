import React from "react";
import { useContext } from "../useContext/useContext";

const CountDown = () => {
  const { count, setCount } = useContext();
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>update</button>
    </div>
  );
};

export default CountDown;
