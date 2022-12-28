import styled from "styled-components";
import { CircleProps } from "./CircleType";
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;
interface Player {
  name: string;
  age: string;
}
const Hello = (playerObj: Player) =>
  `Hello${playerObj.name} you are ${playerObj.age} years old`;
Hello({ name: "chan", age: "12" });

export default function Circle(props: CircleProps) {
  return <Container bgColor={props.bgColor} />;
}
