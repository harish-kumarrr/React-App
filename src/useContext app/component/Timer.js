import React from "react";
import CountDown from "./CountDown";
import { useContext } from "../useContext/useContext";

const Timer = () => {
  const { count } = useContext();
  return (
    <>
      <CountDown />
      {count === 2 && <h1>I am okay</h1>}
    </>
  );
};

export default Timer;
