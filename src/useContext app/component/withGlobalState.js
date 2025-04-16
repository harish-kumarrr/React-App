import React, { useState } from "react";

const withGlobalState = (Component) => {
  return function WrapperComponent(props) {
    const [count, setCount] = useState(0);
    return <Component {...props} count={count} setCount={setCount} />;
  };
};

export default withGlobalState;
