import { Canvas } from "@react-three/fiber";
import Styled from "styled-components";

import Cube from "../assets/sections/3D";

const ThreeDimensions = () => {
  const Container = Styled.section`
    background-color: #777;
    min-height: 100vh
  `;

  return (
    <Container>
      <Canvas style={{ backgroundColor: "#777", minHeight: "100vh" }}>
        <ambientLight intensity={0.3} />
        <Cube color="hotpink" position={[3, 0, 0]} />
        <Cube color="skyblue" position={[-3, 0, 0]} />
        <Cube color="orange" position={[0, 0, 0]} />
      </Canvas>
    </Container>
  );
};

export default ThreeDimensions;
