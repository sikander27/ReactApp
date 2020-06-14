import React, { useState } from "react";

const Clock = () => {
  const [state, setState] = useState({
    time: new Date(),
  });
  React.useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanUp() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setState({
      ...state,
      time: new Date(),
    });
  }
  return (
    <>
      <h1>{state.time.toLocaleTimeString()}</h1>
    </>
  );
};
export default Clock;
