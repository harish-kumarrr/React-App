import React from "react";
import TimerWithGlobalState from "./component/Timer";
import { ContextProvider } from "./useContext/useContext";
function App() {
  return (
    <ContextProvider>
      <TimerWithGlobalState />{" "}
    </ContextProvider>
  );
}

export default App;
