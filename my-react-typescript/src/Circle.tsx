import styled from "styled-components";
import { CircleProps } from "./CircleType";

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 10px solid ${(props) => props.borderColor};
`;

export default function Circle(
  props: CircleProps,
  { text = "default text" }: CircleProps
) {
  return (
    <Container
      bgColor={props.bgColor}
      borderColor={props.borderColor ?? props.bgColor}
    >
      {props.text ?? text}
    </Container>
  );
}
