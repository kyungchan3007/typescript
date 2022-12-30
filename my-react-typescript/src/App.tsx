import React, { useState } from "react";
import styled from "styled-components";
import Circle from "./Circle";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

export default function App() {
  const [value, setValue] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello", value);
  };

  const [counter, setCounter] = useState<number>(0);

  const onClickCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Container>
        <H1>HELLO</H1>
        {/* <Circle borderColor="yellow" bgColor="teal" />
        <Circle
          text="chan"
          bgColor="red"
          onClickCounter={onClickCounter}
          counter={counter}
        />
        <Circle text="chan" bgColor="blue" borderColor="orange" /> */}
        {/* <form onSubmit={onSubmit}>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="username"
          />
          <button>Click</button>
        </form> */}
      </Container>
    </div>
  );
}
