import React, { useState } from "react";
import Circle from "./Circle";
export default function App() {
  const [counter, setCounter] = useState<number>(0);

  const onClickCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle
        text="chan"
        bgColor="red"
        onClickCounter={onClickCounter}
        counter={counter}
      />
      <Circle text="chan" bgColor="blue" borderColor="orange" />
    </div>
  );
}
